//https://medium.com/@cafraser/how-to-download-public-youtube-captions-in-xml-b4041a0f9352

//dqF37orE1EE
export async function getScript(url, req, res) {
  var key = process.env.YOUTUBE_KEY
  let videoId = '';
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1];
  } else if (url.includes('v=')) {
    videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
  }
  const response = await fetch(`https://www.googleapis.com/youtube/v3/captions?part=snippet&id=${videoId}&fields=items(id,snippet)&key=${key}`)
}

//https://www.googleapis.com/youtube/v3/captions?part=snippet&id=yUkLEZacQd8&fields=items(id,snippet)&key=AIzaSyCU1vucturUgMf3q0iCol8t332XgJ1S9U4


//https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.captions.list?part=snippet&videoId=yUkLEZacQd8'+videoId

//https://www.googleapis.com/youtube/v3/captions/list?part=snippet&type=video&videoId=yUkLEZacQd8&key=AIzaSyCU1vucturUgMf3q0iCol8t332XgJ1S9U4



//https://www.googleapis.com/youtube/v3/captions?part=snippet&id=yUkLEZacQd8&fields=items(id,snippet)


//https://www.googleapis.com/youtube/v3/speech?videoId=yUkLEZacQd8&key=AIzaSyCU1vucturUgMf3q0iCol8t332XgJ1S9U4

//https://www.googleapis.com/youtube/v3/speech?part=processingDetails&key=AIzaSyCU1vucturUgMf3q0iCol8t332XgJ1S9U4&video_id=yUkLEZacQd8



//https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId=yUkLEZacQd8&key=AIzaSyCU1vucturUgMf3q0iCol8t332XgJ1S9U4&auto=yes



export default async (req, res) => {
  var key = process.env.YOUTUBE_KEY
  const response = await fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCLMdmCCRFGWt7rktx6tMErw&key='+key)
  const json = await response.json()
  const {subscriberCount, viewCount, videoCount} = json.items[0].statistics
  return res.status(200).json({
    subscriberCount, 
    videoCount,
    viewCount
  })
} 




fetch(`https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId=${videoId}&key=YOUR_API_KEY_HERE&auto=yes`)
  .then(response => response.json())
  .then(data => {
    if (data.items && data.items.length > 0) {
      // The captions will be in the "text" field of each "snippet" object
      const captions = data.items.map(item => item.snippet.text);
      console.log(captions);
    } else {
      console.log('No automatic captions found for this video');
    }
  });