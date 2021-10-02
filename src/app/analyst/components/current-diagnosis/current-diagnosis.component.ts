import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DiagnosisService, SolicitationReplyService } from '../../services';
import { DiagnosticPending, SolicitationReplyPending } from '../../models';

@Component({
  selector: 'dj-current-diagnosis',
  templateUrl: './current-diagnosis.component.html',
  styleUrls: ['./current-diagnosis.component.css']
})
export class CurrentDiagnosisComponent implements OnInit {
  replies: SolicitationReplyPending[];
  diagnosticPending: DiagnosticPending;
  isPending = true;

  constructor(
    private service: DiagnosisService,
    private replyService: SolicitationReplyService,
    private location: Location
  ) {}

  ngOnInit() {
    this.findPending();
    this.findReplyPending();
  }

  onBack() {
    this.location.back();
  }

  private findPending() {
    this.service.findPending().subscribe(response => {
      if (response.data) {
        this.diagnosticPending = response.data;
      } else {
        this.isPending = false;
      }
    });
  }

  nextDiagnostic(diagnostic: DiagnosticPending) {
    this.diagnosticPending = diagnostic;
  }

  private findReplyPending() {
    this.replyService.findPending().subscribe(response => {
      this.replies = response.data;
    });
  }
}
