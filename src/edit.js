/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
 import { Placeholder, TextControl, TextareaControl } from '@wordpress/components';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, isSelected } ) {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			{ attributes.fullName && !isSelected ? (
				<div>{ attributes.fullName }</div>
			) : (
				<Placeholder
					label={ __( 'Contact Card', 'ap-contact-card' ) }
					instructions={ __( 'Fill in the contact information', 'ap-contact-card' ) }
				>
					<TextControl
						label={ __( 'Full name', 'ap-contact-card' ) }
						value={ attributes.fullName }
						onChange={ ( value ) => setAttributes( { fullName: value } ) }
					/>
					<TextControl
						label={ __( 'Job title', 'ap-contact-card' ) }
						value={ attributes.jobTitle }
						onChange={ ( value ) => setAttributes( { jobTitle: value } ) }
					/>
					<TextControl
						label={ __( 'Email', 'ap-contact-card' ) }
						value={ attributes.email }
						onChange={ ( value ) => setAttributes( { email: value } ) }
					/>
					<TextareaControl
						label={ __( 'Description', 'ap-contact-card' ) }
						value={ attributes.description }
						onChange={ ( value ) => setAttributes( { description: value } ) }
					/>
				</Placeholder>
			) }
		</div>
	);
}
