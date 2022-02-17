import Script from "next/script";
import ThemeWrapper from "../contexts/ThemeWrapper";
import "../styles/globals.css";

/*<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0YQ9VC6L4N"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0YQ9VC6L4N');
</script>*/

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-0YQ9VC6L4N"}
      />
      <Script id="testId" strategy="lazyOnload">
        {" "}
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-0YQ9VC6L4N');`}
      </Script>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </>
  );
}

export default MyApp;
