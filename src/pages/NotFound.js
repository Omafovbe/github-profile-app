import SEOtag from "../components/SEOtag";

export default function NotFound() {
    return (
        <>
            <SEOtag
        title="404"
        description="Page not found for github profile app"
        canonical="/notfound"
      />
        <div style={{paddingTop: '150px', textAlign: 'center'}}>
            <p className="not__found">4 0 4</p>
            😒 😢 We can't find that page.
        </div>
        </>
    )
}