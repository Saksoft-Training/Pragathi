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
   * @param element - Reference to the DOM element this directive is attached to
   * @param renderer - used to modify the element's classes
   */
  constructor(private element: ElementRef, private renderer: Renderer2) { }
  //#endregion

  //#region MouseEvents
  /**
   * @summary Adds the highlight class on mouse enter.
   */
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.element.nativeElement, this.highlightClass);
  }
  /**
   * @summary Removes the highlight class on mouse leave.
   */
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.element.nativeElement, this.highlightClass);
  }
  //#endregion
}
