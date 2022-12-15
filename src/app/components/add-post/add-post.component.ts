import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  validateForm: FormGroup;

  constructor(private fb: UntypedFormBuilder,
    private router: Router,
    private postService: PostService) {
    this.validateForm = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const formData = this.validateForm.value;

      this.postService.save(formData).subscribe({
        next: (response: any) => {
          console.log('Observer got a next value: ' + response);
          this.router.navigateByUrl("/posts")
        },
        error: (err: Error) => console.error('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification'),
      })
    } else {
      this.validateAllFormFields(this.validateForm); 
    }
  }

  validateAllFormFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);             
      if (control instanceof FormControl) {             
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        
        this.validateAllFormFields(control);            
      }
    });
  }

  resetForm(e: MouseEvent): void {    
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }
}
