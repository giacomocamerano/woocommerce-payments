/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Card,
	CardBody,
	CardHeader,
	SelectControl,
} from '@wordpress/components';

/**
 * Internal dependencies.
 */
import Info from '../info';
import Page from 'components/page';
import wcpayTracks from 'tracks';
import Loadable, { LoadableBlock } from 'components/loadable';
import { TestModeNotice, topics } from 'components/test-mode-notice';
import { DisputeEvidenceForm } from './dispute-evidence-form';
import { useDispute } from 'wcpay/data';
import {
	getDisputeProductType,
	PRODUCT_TYPE_META_KEY,
} from 'wcpay/disputes/helpers';

const DisputeNotLoadedPage = () => (
	<Page isNarrow className="wcpay-dispute-details">
		<TestModeNotice topic={ topics.disputeDetails } />
		<div>{ __( 'Dispute not loaded', 'woocommerce-payments' ) }</div>
	</Page>
);

const ProductTypeSelectionCard = ( {
	isLoading,
	productType,
	updateProductType,
	readOnly,
} ) => (
	<Card size="large">
		<CardHeader>
			{
				<Loadable
					isLoading={ isLoading }
					value={ __( 'Product type', 'woocommerce-payments' ) }
				/>
			}
		</CardHeader>
		<CardBody>
			<LoadableBlock isLoading={ isLoading } numLines={ 2 }>
				<SelectControl
					value={ productType }
					onChange={ updateProductType }
					options={ [
						{
							label: __( 'Select one…', 'woocommerce-payments' ),
							disabled: true,
							value: '',
						},
						{
							label: __(
								'Physical product',
								'woocommerce-payments'
							),
							value: 'physical_product',
						},
						{
							label: __(
								'Digital product or service',
								'woocommerce-payments'
							),
							value: 'digital_product_or_service',
						},
						{
							label: __(
								'Offline service',
								'woocommerce-payments'
							),
							value: 'offline_service',
						},
						{
							label: __(
								'Multiple product types',
								'woocommerce-payments'
							),
							value: 'multiple',
						},
					] }
					disabled={ readOnly }
				/>
			</LoadableBlock>
		</CardBody>
	</Card>
);

export const DisputeEvidencePage = ( props ) => {
	const { disputeId } = props;

	const { dispute, updateDispute, isLoading } = useDispute( disputeId );

	// If dispute is not loading and doesn't exist, show the relevant component.
	if ( ! isLoading && ! dispute?.id ) {
		return <DisputeNotLoadedPage />;
	}

	const productType = getDisputeProductType( dispute );
	const updateProductType = ( newProductType ) => {
		const properties = {
			selection: newProductType,
		};
		wcpayTracks.recordEvent( 'wcpay_dispute_product_selected', properties );
		updateDispute( {
			...dispute,
			metadata: {
				...dispute.metadata,
				[ PRODUCT_TYPE_META_KEY ]: newProductType,
			},
		} );
	};

	const readOnly =
		'needs_response' !== dispute?.status &&
		'warning_needs_response' !== dispute?.status;

	return (
		<Page isNarrow className="wcpay-dispute-evidence">
			<TestModeNotice topic={ topics.disputeDetails } />

			<Card size="large">
				<CardHeader>
					{
						<Loadable
							isLoading={ isLoading }
							value={ __(
								'Challenge dispute',
								'woocommerce-payments'
							) }
						/>
					}
				</CardHeader>
				<CardBody>
					<Info dispute={ dispute } isLoading={ isLoading } />
				</CardBody>
			</Card>

			<ProductTypeSelectionCard
				isLoading={ isLoading }
				productType={ productType }
				updateProductType={ updateProductType }
				readOnly={ readOnly }
			/>

			{
				// Don't render the form placeholder while the dispute is being loaded.
				// The form content depends on the selected product type, hence placeholder might disappear after loading.
				! isLoading && (
					<DisputeEvidenceForm
						readOnly={ readOnly }
						disputeId={ disputeId }
					/>
				)
			}
		</Page>
	);
};
