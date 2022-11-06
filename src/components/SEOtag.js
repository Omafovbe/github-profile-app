import { Helmet } from "react-helmet-async"


const SEOtag = ({title, description, canonical}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
        </Helmet>
    )
}

export default SEOtag