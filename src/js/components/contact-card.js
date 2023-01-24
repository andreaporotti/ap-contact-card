/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

export default function ContactCard( attributes ) {
    // List of workplaces.
	const workplaces = {
		'office': 'Office',
		'home'  : 'Home',
		'hybrid': 'Hybrid',
	}

    return (
        <>
            { attributes.imageUrl && (
            	<img className="apcc-image" src={ attributes.imageUrl } alt={ attributes.imageAlt } />
            ) }

            <div className="apcc-full-name">{ attributes.fullName }</div>

            <span className="apcc-label">{ __( 'Job title', 'ap-contact-card' ) }</span>
            <div className="apcc-job-title">{ attributes.jobTitle }</div>

            <span className="apcc-label">{ __( 'Email', 'ap-contact-card' ) }</span>
            <div className="apcc-email">{ attributes.email }</div>

            <span className="apcc-label">{ __( 'Workplace', 'ap-contact-card' ) }</span>
            <div className="apcc-workplace">{ workplaces[attributes.workplace] }</div>

            <span className="apcc-label">{ __( 'About', 'ap-contact-card' ) }</span>
            <p className="apcc-description">{ attributes.description }</p>
        </>
    )
}