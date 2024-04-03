

//API Calls

//upload new video

import { CommenAPI } from "./commenApi"
import { SERVER_URL } from "./serverurl"

export const uploadVideoAPI= async(video)=>{

    return await CommenAPI("POST",`${SERVER_URL}/allVideos`,video)
}

//get all videos

export const getAlluploadVideoAPI= async()=>{

    return await CommenAPI("GET",`${SERVER_URL}/allVideos`,"")
}

//get a video

export const getAVideoAPI= async(id)=>{

    return await CommenAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}

//add video to history 
export const AddVideoHistoryAPI= async(video)=>{

    return await CommenAPI("POST",`${SERVER_URL}/history`,video)
}

//get a video from history

export const getHistoryAPI= async()=>{

    return await CommenAPI("GET",`${SERVER_URL}/history`,"")
}

// delete video from history
export const deleteHistoryAPI= async(id)=>{

    return await CommenAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

// delete video
export const deleteVideoAPI= async(id)=>{

    return await CommenAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

//add category videos
export const addCategoryAPI= async(category)=>{

    return await CommenAPI("POST",`${SERVER_URL}/category`,category)
}
//get category

export const getAllCategoryAPI= async()=>{

    return await CommenAPI("GET",`${SERVER_URL}/category`,"")
}

//delete category

export const deleteCategoryAPI= async(id)=>{

    return await CommenAPI("DELETE",`${SERVER_URL}/category/${id}`,{})
}

// update video to category
export const updtaeCategoryAPI= async(id,categoryDetails)=>{

    return await CommenAPI("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
}
