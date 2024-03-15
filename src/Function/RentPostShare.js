
const RentPostShare = async(post_id) => {
    try {
        await navigator.share({ url: `https://btolet.com/rentdetail/${post_id}` });
        console.log('Shared successfully');
    } catch (error) {
        console.error('Error sharing:', error);
    }
};

export default RentPostShare;