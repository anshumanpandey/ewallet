import {ENDPOINT} from '../api/EndPoint'
import NetworkHelper from './NetworkHelper'

function WService() {
    this.url = ENDPOINT
  }

  WService.prototype.makeUrl = function (resource) {
    var url = this.url + resource
    return url
  }

//   WService.prototype.signUp = function (name,email,birthday,user_type,password) {
//     return NetworkHelper.requestPost(this.makeUrl('/user/register'), { name,email,birthday,user_type,password})
//   }

//   WService.prototype.forgotPassword = function (email) {
//     return NetworkHelper.requestPost(this.makeUrl('/mail/resetPasswordRequest'), { email })
//   }
  
//   WService.prototype.signIn = function (email, password) {
//     return NetworkHelper.requestPost(this.makeUrl('/user/login'), { email, password })
//   }

//   WService.prototype.profile = function (id) {
//     return NetworkHelper.requestGet(this.makeUrl(`users/profile/${id}`))
//   }

//   WService.prototype.initData = function () { 
//     return NetworkHelper.requestGet(this.makeUrl('/initial_data'))
//   }
//   WService.prototype.getEvent = function () { 
//     return NetworkHelper.requestGet(this.makeUrl('/event/mycreated_event'))
//   }
//   WService.prototype.profileUpgrade = function (name,image,email,password,birthday,country,city,bio,interests,facebook,twitter,instagram,profile_picture){
//     return NetworkHelper.requestFormDataPost(this.makeUrl('/user/update_profile'),{name,image,email,password,birthday,country,city,bio,interests,facebook,twitter,instagram,profile_picture})
//   }
//   WService.prototype.createEvent = function(data){
//     return NetworkHelper.requestFormDataPost(this.makeUrl('/event/create'),data)
//   }
//   WService.prototype.buyTicket = function(event_id,count){
//     return NetworkHelper.requestPost(this.makeUrl('/ticket/buy'),{event_id,count})
//   }
  module.exports = WService
