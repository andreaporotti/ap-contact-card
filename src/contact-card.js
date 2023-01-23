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
            <div className="apcc-job-title">{ attributes.jobTitle }</div>
            <div className="apcc-email">{ attributes.email }</div>
            <div className="apcc-workplace">{ workplaces[attributes.workplace] }</div>
            <p className="apcc-description">{ attributes.description }</p>
        </>
    )
}