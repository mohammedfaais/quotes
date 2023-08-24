function TwitterShare() {
    const tweetText = "Check out this awesome quote!";
    const tweetUrl = encodeURIComponent(window.location.href);
  
    const handleShare = () => {
      const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        tweetText
      )}&url=${tweetUrl}`;
      window.open(twitterShareUrl, '_blank');
    };
  
    return (
      <div>
        <button onClick={handleShare} className="btn btn-twitter">Share on Twitter</button>
      </div>
    );
  }


  export default TwitterShare;