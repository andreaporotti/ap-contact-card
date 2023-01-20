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

	// Set workplace text from value.
	let workplace = '';
	switch(attributes.workplace) {
		case 'office':
			workplace = 'Office';
			break;
		case 'home':
			workplace = 'Home';
			break;
		case 'hybrid':
			workplace = 'Hybrid';
			break;
	}

	return (
		<div { ...blockProps }>
			<div class="full-name">{ attributes.fullName }</div>
			<div class="job-title">{ attributes.jobTitle }</div>
			<div class="email">{ attributes.email }</div>
			<div class="workplace">{ workplace }</div>
			<p class="description">{ attributes.description }</p>
			{ attributes.imageUrl && (
				<img class="image" src={ attributes.imageUrl } alt={ attributes.imageAlt } />
			) }
		</div>
	);
}
