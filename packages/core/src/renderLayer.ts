import {Store} from "@bici-topology/store-utils";
import { Options } from './options';
import { Canvas } from './canvas';
import { TopologyData } from './models/data';
import { rgba } from './utils/math';

export class RenderLayer extends Canvas {
  offscreen: any;
  data: TopologyData;

  bkImg: HTMLImageElement;
  bkImgRect: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  constructor(public parentElem: HTMLElement, public options: Options = {}, TID: string) {
    super(parentElem, options, TID);
    this.offscreen = Store.get(this.generateStoreKey('LT:offscreen'));
    this.parentElem.appendChild(this.canvas);
    this.data = Store.get(this.generateStoreKey('topology-data'));
  }

  loadBkImg(cb?: any) {
    if (!this.data.bkImage) {
      return;
    }

    this.bkImg = new Image();
    // this.bkImg.crossOrigin = 'anonymous';
   this.bkImg.src = this.data.bkImage;
    this.bkImg.onload = () => {
      this.bkImgRect = this.coverRect(this.canvas.width, this.canvas.height, this.bkImg.width, this.bkImg.height);
      if (cb) {
        cb();
      }
    };
  }

  clearBkImg() {
    this.bkImgRect = null;
  }

  render = () => {
    if (this.data && this.data.bkImage && !this.bkImgRect) {
      this.loadBkImg(this.render);
      return;
    }

    if (!this.width || !this.height || !this.offscreen) {
      return;
    }

    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.data.bkColor || this.options.bkColor) {
      ctx.fillStyle = this.data.bkColor || this.options.bkColor;
      ctx.fillRect(0, 0, this.width, this.height);
    }

    if (this.bkImg && this.bkImgRect) {
      ctx.drawImage(this.bkImg, 0, 0, this.width, this.height);
    }

    if (this.data.grid || this.options.grid) {
      this.grid();
    }
    if (this.data.rule || this.options.rule) {
      this.rule();
    }

    ctx.drawImage(this.offscreen, 0, 0, this.width, this.height);
  };

  rule() {
    const ctx = this.canvas.getContext('2d');
    ctx.save();
    ctx.lineWidth = 1;
    ctx.strokeStyle = rgba(0.7, this.data.ruleColor || this.options.ruleColor || '#888');
    ctx.beginPath();
    for (let i = 10; i < this.width; i += 10) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 5);
    }

    for (let i = 10; i < this.height; i += 10) {
      ctx.moveTo(0, i);
      ctx.lineTo(5, i);
    }
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = this.data.ruleColor || this.options.ruleColor || '#888';
    ctx.fillStyle = ctx.strokeStyle;
    for (let i = 100; i < this.width; i += 100) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 10);
      ctx.fillText(i.toString(), i + 4, 16);
    }

    for (let i = 100; i < this.height; i += 100) {
      ctx.moveTo(0, i);
      ctx.lineTo(10, i);
    }
    ctx.stroke();

    for (let i = 100; i < this.height; i += 100) {
      ctx.save();
      ctx.beginPath();
      ctx.translate(16, i - 4);
      ctx.rotate((270 * Math.PI) / 180);
      ctx.fillText(i.toString(), 0, 0);
      ctx.restore();
    }
    ctx.restore();
  }

  grid() {
    const ctx = this.canvas.getContext('2d');
    ctx.save();
    ctx.lineWidth = 1;
    ctx.strokeStyle = this.data.gridColor || this.options.gridColor || '#f3f3f3';
    ctx.beginPath();
    const size = this.data.gridSize || this.options.gridSize;
    for (let i = size; i < this.width; i += size) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, this.height);
    }
    for (let i = size; i < this.height; i += size) {
      ctx.moveTo(0, i);
      ctx.lineTo(this.width, i);
    }
    ctx.stroke();

    ctx.restore();
  }

  coverRect(canvasWidth: number, canvasHeight: number, imgWidth: number, imgHeight: number) {
    let x = 0;
    let y = 0;
    let width = imgWidth;
    let height = imgHeight;
    if (imgWidth > imgHeight || (imgWidth === imgHeight && canvasWidth < canvasHeight)) {
      width = (canvasWidth * height) / canvasHeight;
      x = (imgWidth - width) / 2;
    } else if (imgWidth < imgHeight || (imgWidth === imgHeight && canvasWidth > canvasHeight)) {
      height = (canvasHeight * width) / canvasWidth;
      y = (imgHeight - height) / 2;
    }
    return {
      x,
      y,
      width,
      height,
    };
  }
}
