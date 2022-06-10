import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FeedbackservService } from '../feedbackserv.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  form!: FormGroup;
  feedbackrating = [1,2,3,4,5]
  testrating = [1,2,3,4,5,6,7,8,9,10]
  feedback = new FormControl('')
  constructor(private formBuilder: FormBuilder, private feedserv: FeedbackservService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      rating1:'',
      rating2:'',
      rating3:'',
      rating4:'',
    });
  }
  countStar(star: number,rating: number) {
    let key = 'rating'+String(rating)
    this.form.controls[key].setValue(star);
  }

  reload() {
    this.form.addControl('feedback',this.feedback)
    let val = this.form.getRawValue()
    console.log(val);
    this.feedserv.newFeedback(val)
    .subscribe(res => {
      console.log(res.toString());
    })
    setTimeout(() => {
      location.reload();
    }, 5000);
  }

}
