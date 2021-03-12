import { useEffect, useState } from "react";
import "./Cursor.css";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setScroll] = useState(false);

  useEffect(() => {
    const titles = document.querySelectorAll(".title_moto");
    const mouseCursor = document.querySelector(".cursor");

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", onMouseMove);

    titles.forEach((title) => {
      title.addEventListener("mouseover", () => {
        mouseCursor.classList.add("title_grow");
        title.classList.add("hovered");
      });
    });

    titles.forEach((title) => {
      title.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("title_grow");
        title.classList.remove("hovered");
      });
    });

    const websites = document.querySelector(".title_moto1");
    const brands = document.querySelector(".title_moto3");
    const advertisments = document.querySelector(".title_moto2");
    const image1 = document.querySelector(".img1");

    const wrapper1 = document.querySelector(".item_wrapper1");
    const wrapper2 = document.querySelector(".item_wrapper2");
    const wrapper3 = document.querySelector(".item_wrapper3");

    const verifyScroll = () => {
      if (window.scrollY > 1) {
        setScroll(true);
      }
      if (window.scrollY <= 1) {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", verifyScroll);

    //navlinks
    wrapper1.addEventListener("mouseover", () => {
      mouseCursor.classList.add("nav_items_grow");
    });
    wrapper1.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("nav_items_grow");
    });

    wrapper2.addEventListener("mouseover", () => {
      mouseCursor.classList.add("nav_items_grow");
    });
    wrapper2.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("nav_items_grow");
    });

    wrapper3.addEventListener("mouseover", () => {
      mouseCursor.classList.add("nav_items_grow");
    });
    wrapper3.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("nav_items_grow");
    });
    // ----navlinks

    //scroll blocheaza gif
    if (isScrolled === false) {
      advertisments.addEventListener("mouseover", () => {
        mouseCursor.classList.add("advertisments");
      });
      advertisments.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("advertisments");
      });

      brands.addEventListener("mouseover", () => {
        mouseCursor.classList.add("brands");
      });
      brands.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("brands");
      });

      websites.addEventListener("mouseover", () => {
        mouseCursor.classList.add("websites");
      });
      websites.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("websites");
      });
    }

    if (isScrolled) {
      websites.addEventListener("mouseover", () => {
        mouseCursor.classList.add("title_grow");
        mouseCursor.classList.remove("websites");
      });

      advertisments.addEventListener("mouseover", () => {
        mouseCursor.classList.add("title_grow");
        mouseCursor.classList.remove("advertisments");
      });

      brands.addEventListener("mouseover", () => {
        mouseCursor.classList.add("title_grow");
        mouseCursor.classList.remove("brands");
      });
    }

    image1.addEventListener("mouseover", () => {
      mouseCursor.classList.add("imageHover");
    });
    image1.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("imageHover");
    });

    return () => {
      wrapper1.removeEventListener("mouseover", () => {
        mouseCursor.classList.add("nav_items_grow");
      });
      wrapper1.removeEventListener("mouseleave", () => {
        mouseCursor.classList.remove("nav_items_grow");
      });

      wrapper2.removeEventListener("mouseover", () => {
        mouseCursor.classList.add("nav_items_grow");
      });
      wrapper2.removeEventListener("mouseleave", () => {
        mouseCursor.classList.remove("nav_items_grow");
      });

      wrapper3.removeEventListener("mouseover", () => {
        mouseCursor.classList.add("nav_items_grow");
      });
      wrapper3.removeEventListener("mouseleave", () => {
        mouseCursor.classList.remove("nav_items_grow");
      });

      if (isScrolled) {
        websites.removeEventListener("mouseover", () => {
          mouseCursor.classList.add("title_grow");
          mouseCursor.classList.remove("websites");
        });

        advertisments.removeEventListener("mouseover", () => {
          mouseCursor.classList.add("title_grow");
          mouseCursor.classList.remove("advertisments");
        });

        brands.removeEventListener("mouseover", () => {
          mouseCursor.classList.add("title_grow");
          mouseCursor.classList.remove("brands");
        });
      }

      brands.removeEventListener("mouseover", () => {
        mouseCursor.classList.add("brands");
      });
      brands.removeEventListener("mouseleave", () => {
        mouseCursor.classList.remove("brands");
      });

      websites.removeEventListener("mouseover", () => {
        mouseCursor.classList.add("websites");
      });
      websites.removeEventListener("mouseleave", () => {
        mouseCursor.classList.remove("websites");
      });

      advertisments.removeEventListener("mouseover", () => {
        mouseCursor.classList.add("advertisments");
      });
      advertisments.removeEventListener("mouseleave", () => {
        mouseCursor.classList.remove("advertisments");
      });

      image1.removeEventListener("mouseover", () => {
        mouseCursor.classList.add("imageHover");
      });
      image1.removeEventListener("mouseleave", () => {
        mouseCursor.classList.remove("imageHover");
      });

      document.removeEventListener("mousemove", onMouseMove);

      titles.forEach((title) => {
        title.removeEventListener("mouseover", () => {
          mouseCursor.classList.add("title_grow");
          title.classList.add("hovered");
        });
      });

      titles.forEach((title) => {
        title.removeEventListener("mouseleave", () => {
          mouseCursor.classList.remove("title_grow");
          title.classList.remove("hovered");
        });
      });
    };
  }, [isScrolled]);

  return (
    <>
      <div
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        className="cursor"
      />
    </>
  );
}
