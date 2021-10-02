import { Component, OnInit } from '@angular/core';
import { PersonService, TokenService } from '../../../shared/services';
import { Profile } from '../../models';
import { ProfileDataService } from './profile-data.service';
import { environment } from '../../../../environments/environment';
import { Observable, Observer } from 'rxjs';
import { UploadChangeParam, NzMessageService, UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'dj-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private readonly maxImageSize: number = 30;
  private readonly numberOfDocuments: number = 2;
  readonly urlUpload: string = environment.urlApi + 'avatars';
  isLoading = true;
  profile: Profile;
  avatarUrl: string;
  avatarLoading = false;

  constructor(
    private service: PersonService,
    private storage: ProfileDataService,
    private token: TokenService,
    private messageService: NzMessageService
  ) {}

  ngOnInit() {
    this.service.findProfile(this.token.getId()).subscribe(
      response => {
        this.isLoading = false;
        this.profile = response.data;
        this.storage.profile = response.data;
        this.avatarUrl = this.profile.avatar;
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    // tslint:disable-next-line: no-non-null-assertion
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  changeFile(param: UploadChangeParam | any) {
    const info: UploadFile = param.file;
    switch (info.status) {
      case 'uploading':
        this.avatarLoading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.originFileObj, (img: string) => {
          this.avatarLoading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.messageService.error('Network error');
        this.avatarLoading = false;
        break;
    }
    console.log(param.response.data);
  }

  beforeUpload = (file: File): boolean | Observable<boolean> => {
    return new Observable((observer: Observer<boolean>) => {
      const isImage: boolean = file.type.includes('image');
      if (!isImage) {
        this.messageService.error(
          'Você só pode anexar arquivos de imagem (Jpeg, PNG, SVG, etc'
        );
        observer.complete();
        return;
      }
      const sizeExceeded: boolean = file.size / 1024 / 1024 < this.maxImageSize;
      if (!sizeExceeded) {
        this.messageService.error(
          `A imagem deve ser menor que ${this.maxImageSize}MB`
        );
        observer.complete();
        return;
      }
      observer.next(isImage && sizeExceeded);
      observer.complete();
    });
  };
}
