import { Component, OnInit, Input } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})

export class HeaderComponent implements OnInit {

  @Input() navClass: string;
  @Input() buttonList: boolean;
  @Input() sliderTopbar: boolean;
  @Input() isdeveloper: boolean;
  @Input() shopPages: boolean;


  constructor(private router: Router, private modalService: NgbModal) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenuDropdown();
      }
    });
  }

  isCondensed = false;

  ngAfterViewInit() {
    this._activateMenuDropdown();
  }

  ngOnInit(): void {
  }

  _activateMenuDropdown() {

    const resetParent = (el) => {

      el.classList.remove("active");
      const parent = el.parentElement;

      if (parent) {
        parent.classList.remove("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.remove("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.remove("active");
              if (parent5) {
                const parent6 = parent5.parentElement;
                parent6.classList.remove("active");
                if (parent6) {
                  const parent7 = parent6.parentElement;
                  parent7.classList.remove("active");
    
                }
              }

            }
          }
        }
      }
    };
    let links = document.getElementsByClassName("nav-link-ref");
    console.log(links);

    let matchingMenuItem = null;
    for (let i = 0; i < links.length; i++) {
      resetParent(links[i]);
    }

    for (let i = 0; i < links.length; i++) {
      
        let value = links[i]["hash"];
        
      if (window.location.hash === value) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      const parent = matchingMenuItem.parentElement;

      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.add("active");
              if (parent5) {
                const parent6 = parent5.parentElement;
                parent6.classList.add("active");
                if (parent6) {
                  const parent7 = parent6.parentElement;
                  parent7.classList.add("active");
    
                  document.getElementById("navigation").style.display = "none";
                  this.isCondensed = false;
                }
              }
            }
          }
        }
      }
    }
  }

  windowScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
    if (document.getElementById("back-to-top")) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("back-to-top").style.display = "inline";
      } else {
        document.getElementById("back-to-top").style.display = "none";
      }
    }
  }
  toggleMenu() {
    this.isCondensed = !this.isCondensed;
    if (this.isCondensed) {
      document.getElementById("navigation").style.display = "block";
    } else {
      document.getElementById("navigation").style.display = "none";
    }
  }

  onMenuClick(event) {
    event.preventDefault();
    const nextEl = event.target.nextSibling.nextSibling;
    if (nextEl && !nextEl.classList.contains("open")) {
      const parentEl = event.target.parentNode;
      if (parentEl) {
        parentEl.classList.remove("open");
      }
      nextEl.classList.add("open");
    } else if (nextEl) {
      nextEl.classList.remove("open");
    }
    return false;
  }

  developerModal(content) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  wishListModal(content) {
    this.modalService.open(content, { centered: true });
  }
}
