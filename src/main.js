// GSAP library
// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Apply animation to article paragraphs
gsap.utils.toArray('.article-paragraph').forEach((paragraph) => {
  gsap.fromTo(paragraph, 
    {
      y: 50,               // Start state: move down
      opacity: 0           // Initially invisible
    }, 
    {
      y: 0,                // End state: normal position
      opacity: 1,          // Fully visible
      scrollTrigger: {
        trigger: paragraph, // Trigger is each paragraph
        start: 'top 90%',   // Start when paragraph is in the viewport
        end: 'top center',  // End when it reaches the center
        scrub: true,        // Smooth transition during scroll
        // markers: true,      // For debugging, can be removed later
        // onUpdate: (self) => {
        //   const velocity = self.getVelocity();  // Log scroll velocity
        //   console.log('Scroll velocity (paragraph):', velocity);
        // }
      }
    }
  );
});

// Apply animation to article headers (h3 elements)
gsap.utils.toArray('.article-header').forEach((header) => {
  gsap.fromTo(header, 
    {
      y: 50,               // Start state: move down
      opacity: 0           // Initially invisible
    }, 
    {
      y: 0,                // End state: normal position
      opacity: 1,          // Fully visible
      scrollTrigger: {
        trigger: header,    // Trigger is each header
        start: 'top 90%',   // Start when header is in the viewport
        end: 'top center',  // End when it reaches the center
        scrub: 1,        // Smooth transition during scroll
        // markers: true,      // For debugging, can be removed later
        // onUpdate: (self) => {
        //   const velocity = self.getVelocity();  // Log scroll velocity
        //   console.log('Scroll velocity (header):', velocity);
        // }
      }
    }
  );
});

    // Apply animation to images within #image-section
    gsap.utils.toArray('#image-section .section-image').forEach((image) => {
        gsap.fromTo(image, 
          {
            y: -20,
            scale: 0.8,          // Start state: slightly scaled down
            rotationX: 30,       // Rotate slightly on the X-axis
            rotationY: 10,       // Rotate slightly on the Y-axis
            opacity: 0           // Initially invisible
          }, 
          {
            y: 0,
            scale: 1,            // End state: normal scale
            rotationX: 0,        // Align back to zero
            rotationY: 0,        // Align back to zero
            opacity: 1,          // Fully visible
            scrollTrigger: {
              trigger: image,
              start: 'top bottom',  // Start when image is in the viewport
              end: 'top center', // End when it reaches the center
              scrub: 2,       // Smooth transition during scroll
              markers: false,     // Remove markers for production
            //   onUpdate: (self) => {
            //     const velocity = self.getVelocity();
            //     console.log(velocity);
            // }
            }
          }
        );
      });

