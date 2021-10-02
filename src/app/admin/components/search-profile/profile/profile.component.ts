import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../../services';
import { ProfileDataService } from '../profile-data.service';

@Component({
  selector: 'dj-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoading = true;
  id: number;
  profile: Profile;
  formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PersonService,
    private formBuilder: FormBuilder,
    private storage: ProfileDataService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.initProfile();
  }

  private initProfile() {
    this.service.findProfile(this.id).subscribe(
      response => {
        this.isLoading = false;
        this.profile = response.data;
        this.storage.profile = response.data;
      },
      () => {
        this.isLoading = false;
      }
    );
  }
}
