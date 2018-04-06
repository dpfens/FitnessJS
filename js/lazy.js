"use strict";
(function() {
    // a crude but simple lazy-load
    var selector = '.lazy-load[data-src]:not([data-src=""])',
        lazySrcAttribute = 'data-src',
        lazySrcSetAttribute = 'data-srcset',
        srcAttribute = 'src',
        srcSetAttribute = 'srcset',
        lastWidthAttributeName = 'data-last-width',
        nodes = document.querySelectorAll(selector),
        node, resource;

    if (("IntersectionObserver" in window)) {
        var onIntersection = function(entries) {
            // Loop through the entries
            entries.forEach(entry => {
                // Are we in viewport?
                if (entry.intersectionRatio > 0) {
                    var node = entry.target,
                        currentWidth = node.offsetWidth;
                    // Stop watching and load the image
                    lazyLoader.unobserve(node);
                    setImage(node);
                    node.setAttribute(lastWidthAttributeName, currentWidth);
                }

            });
        },
        config = {
            rootMargin: '50px 0px',
            threshold: 0.01
        };

        var lazyLoader = new IntersectionObserver(onIntersection, config);

        nodes.forEach(node => {
            lazyLoader.observe(node);
        });

    } else {
        for (var i = 0; i < nodes.length; i++) {
            node = nodes[i];
            setImage(node);
            node.setAttribute(lastWidthAttributeName, node.offsetWidth);
        }
    }
    window.addEventListener('resize', responsiveResize);

    function responsiveResize(event) {
        var currentWidth, nextBreakWidth;
        for(var i=0;i<nodes.length;i++) {
            var node = nodes[i],
            lastWidth = node.getAttribute(lastWidthAttributeName);

            if(!lastWidth || (!node.getAttribute(srcAttribute) && !node.style.background)) { continue; }
            nextBreakWidth = lastWidth * 1.25,
            currentWidth = node.offsetWidth;
            if(currentWidth >= nextBreakWidth) {
                node.setAttribute(lastWidthAttributeName, currentWidth);
                setImage(node);
            }
        }
    }

    function setImage(node) {
        var resource = node.getAttribute(lazySrcAttribute),
            resourceSet = node.getAttribute(lazySrcSetAttribute),
            tagName = node.tagName;

        if (tagName === 'IMG' || tagName === 'SOURCE' && resource) {
            node.setAttribute(srcAttribute, resource);
        } else if(tagName !== 'IMG' || tagName !== 'SOURCE' && resource) {
            node.style.background = "url('" + resource + "') center center / cover no-repeat";
        }

        if(tagName === 'IMG' || tagName === 'SOURCE' && resourceSet) {
            node.setAttribute(srcSetAttribute, resourceSet);
        }
    }
})();
