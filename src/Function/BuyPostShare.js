const buyPostshare=async(pid)=>{
    try {
        await navigator.share({ url: `https://btolet.com/buydetail/${pid}` });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
  } 

  export default buyPostshare