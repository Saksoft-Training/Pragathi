import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightMovie]',
  standalone: true
})
export class HighlightMovieDirective {

  //#region Properties

  /**
   * @summary Highlights a movie element on hover.
   */
  private highlightClass = 'highlight-movie';

  //#endregion

  //#region Constructor

  /**
   * @summary create instance of HighlightMovieDirective
   * @param el - Reference to the DOM element this directive is attached to
   * @param renderer - used to modify the element's classes
   */
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  //#endregion

  //#region MouseEvents
  /**
   * @summary Adds the highlight class on mouse enter.
   * @returns void
   */

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, this.highlightClass);
  }

  /**
   * @summary Removes the highlight class on mouse leave.
   * @returns void
   */

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, this.highlightClass);
  }

  //#endregion
}