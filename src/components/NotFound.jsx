export default function NotFound() {
  return (
    <>
        <div className="container notfound__container">
            <h1 className="section-header">Page Not Found</h1>
            <img 
            className="notfound__image"
            src="/assets/logo-alt.png" 
            alt="the little lemon logo" 
            />
            <p className="hero__text text__karla">
                The page you are trying to access either does not exist or is currently under construction
            </p>
        </div>

    </>
  )
}
