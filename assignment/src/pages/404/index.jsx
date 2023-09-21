/**
 * Renders the NotFoundPage component.
 *
 * @return {ReactElement} The rendered NotFoundPage component.
 */
export function NotFoundPage() {
  return (
    <div className='not-found-page-wrapper'>
      <img
        src={`${process.env.PUBLIC_URL}/assets/404-error-page.gif`}
        alt='404-error-page.gif'
      />
    </div>
  );
}
