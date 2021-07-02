export const request = (options)=>{
	let baseUrl = wx.getStorageSync("url")
	return new Promise((resolve,reject)=>{
		uni.request({
			url: baseUrl + options.url,
			method:options.method || 'GET',
			data:options.data || {},
			timeout:10000,
			// withCredentials:true,
			success:res=>{
				resolve(res.data)
				console.log(res.data)
			},
			fail:err=>{
				console.log(err)
				reject(err)
			}
		})
	})
}
