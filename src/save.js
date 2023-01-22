/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function Save( { attributes } ) {
	const blockProps = useBlockProps.save();

	// List of workplaces.
	const workplaces = {
		'office': 'Office',
		'home'  : 'Home',
		'hybrid': 'Hybrid',
	}

	return (
		<div { ...blockProps }>
			{ attributes.imageUrl && (
				<img class="apcc-image" src={ attributes.imageUrl } alt={ attributes.imageAlt } />
			) }
			<div class="apcc-full-name">{ attributes.fullName }</div>
			<div class="apcc-job-title">{ attributes.jobTitle }</div>
			<div class="apcc-email">{ attributes.email }</div>
			<div class="apcc-workplace">{ workplaces[attributes.workplace] }</div>
			<p class="apcc-description">{ attributes.description }</p>
		</div>
	);
}
