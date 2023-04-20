import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication-services/authentication.service';
import { StoreService } from 'src/app/core/services/firestore-service/store.service';
import { routing } from 'src/app/core/constant';
@Component({
  selector: 'app-insta-post',
  templateUrl: './instapost.component.html',
  
})
export class InstaPostComponent  {
routing=routing
  imageurl:string=''
  showEmojiPicker = false;
  sets:any = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger'
  ]
postMessage: FormGroup
message:any='';
  constructor( private fb: FormBuilder ,private store:StoreService,private authData:AuthenticationService,private route:Router){
    this.postMessage = this.fb.group({
      postImage: [''],
      postDescription:['']
    })
  }
  set = 'twitter';
  toggleEmojiPicker() {
    console.log(this.showEmojiPicker);
        this.showEmojiPicker = !this.showEmojiPicker;
  }
 async onFileSelected(event: any) {
const image = event.target.files[0];
  await  this.store
      .uploadImage(image)
      .then((url) => {
        this.postMessage=this.fb.group({
          postImage:[url],
          postDescription:[this.postMessage.value.postDescription]
        })
  })
      .catch((error) => {
        console.error(error);
      });
  }
  post(){
    const email =this.authData.getToken('email');
    const userId=this.authData.getToken('userId');
    this.store.addPost(this.postMessage.value,email,userId);
    this,this.postMessage.reset()
    this.route.navigateByUrl(routing.home.home_post_url)
  }
  addEmoji(event:any) {
    console.log(`${event.emoji.native}`)
    const text = `${this.message}${event.emoji.native}`
    this.message=text
  }
}
