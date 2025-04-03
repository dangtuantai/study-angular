import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit {
  hearts: boolean[] = new Array(10).fill(false); // Tăng số lượng tim lên 10
  showMessage = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.hearts.forEach((_, i) => {
      setTimeout(() => {
        console.log(`Xuất hiện trái tim thứ ${i + 1}`);
        this.hearts[i] = true;
        this.cd.markForCheck();
      }, (i + 1) * 500);
    });

    setTimeout(() => {
      console.log('Hiển thị dòng chữ "Tuấn Tài Yêu Ngọc Mai"');
      this.showMessage = true;
      this.cd.markForCheck();
    }, 6000);
  }
}