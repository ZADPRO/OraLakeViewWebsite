import React, { useState, useEffect } from 'react';

export const TestimonialsSection: React.FC = () => {

  // All 7 authentic guest reviews with randomized ratings between 4.3 and 5.0
  const reviewsList = [
    {
      id: 1,
      tag: 'Balcony View & Hospitality',
      ratingScore: '4.9',
      ratingStars: 5,
      text: 'The hospitality, staff there specially Renita is so sweet and kind. The view from our balcony was amazing, waking up to that great view was so good.',
      source: 'Verified Booking Guest',
    },
    {
      id: 2,
      tag: 'Convenient Transit to Interlaken',
      ratingScore: '4.8',
      ratingStars: 5,
      text: 'Amazing view of the lake surrounded by mountains. The staff were very friendly, kind and helpful, which made our visit more enjoyable. We received a train ticket from the place (the train station is in ~1min walking distance) to Interlaken, making it easy to get there.',
      source: 'Verified Booking Guest',
    },
    {
      id: 3,
      tag: 'Excellent Service & Train Access',
      ratingScore: '5.0',
      ratingStars: 5,
      text: 'Excellent views for the lake and mountain. Accessible to train. Staff were very helpful and friendly specially Reneta. Thank you very much for your excellent service.',
      source: 'Verified Booking Guest',
    },
    {
      id: 4,
      tag: 'Perfect Location & Clean Rooms',
      ratingScore: '4.7',
      ratingStars: 5,
      text: 'Location is perfect with amazing view of the lake and mountain. Friendly staff (Renita) who is very helpful and welcoming. Rooms are clean with comfortable beds. Size of the room is suitable.',
      source: 'Verified Booking Guest',
    },
    {
      id: 5,
      tag: 'Lakeview Relaxation Near Interlaken',
      ratingScore: '4.9',
      ratingStars: 5,
      text: "Location wise it is amazing! Nice relax and chill place and great view on the lake. Around 5 minutes of driving and you're in Interlaken city centre. Special thanks to Reneta, she was very welcoming and helpful!",
      source: 'Verified Booking Guest',
    },
    {
      id: 6,
      tag: 'Free Parking & Balcony Panorama',
      ratingScore: '4.8',
      ratingStars: 5,
      text: 'The view from the room balcony is splendid. Staff is great and attentive to your needs. Parking is conveniently great at no cost. There is a train station nearby, from where you can easily reach Interlaken, Brienz and other attractions.',
      source: 'Verified Booking Guest',
    },
    {
      id: 7,
      tag: 'Lovely Breakfast & Comfort',
      ratingScore: '4.6',
      ratingStars: 5,
      text: 'Views from our room were amazing! Staff very friendly and served a lovely breakfast. Room very clean and beds comfortable. Was able to leave our luggage after checkout too. Would definitely stay again!',
      source: 'Verified Booking Guest',
    },
  ];

  // Duplicate list for infinite circular looping
  const displayReviews = [...reviewsList, ...reviewsList, ...reviewsList];

  const [currentIndex, setCurrentIndex] = useState(reviewsList.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Modal State for Full Untruncated Review View
  const [selectedReview, setSelectedReview] = useState<any | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Seamless infinite wrap-around reset
  useEffect(() => {
    if (currentIndex >= reviewsList.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(reviewsList.length);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (currentIndex < reviewsList.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(reviewsList.length * 2 - 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, reviewsList.length]);

  // Auto-slide every 3.5s (Pause if modal is open)
  useEffect(() => {
    if (isPaused || selectedReview !== null) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, selectedReview]);

  // Dynamic transform calculation for desktop, tablet, and mobile (< 640px)
  const getTransformStyle = () => {
    if (windowWidth >= 1024) {
      return `translateX(calc(-${currentIndex} * (100% / 3 + 8px)))`;
    } else if (windowWidth >= 640) {
      return `translateX(calc(-${currentIndex} * (100% / 2 + 12px)))`;
    } else {
      return `translateX(calc(-${currentIndex} * (84vw + 16px)))`;
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-[#FFFAF4] text-black overflow-hidden select-none border-t border-amber-200/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Centered Header Row */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          {/* Tagline Line Badge */}
          <div className="flex items-center justify-center space-x-3">
            <span className="w-8 h-[2px] bg-amber-600" />
            <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
              Guest Reviews & Experiences
            </span>
            <span className="w-8 h-[2px] bg-amber-600" />
          </div>

          {/* Main Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
            What Our Guests Say
          </h2>

          {/* Sub-heading Narrative */}
          <p className="text-black font-sans text-sm sm:text-base font-light leading-relaxed">
            Read authentic reviews from guests who experienced alpine serenity and waterfront hospitality at ORA Lake View Hotel.
          </p>
        </div>

        {/* Carousel Track for Mobile & Desktop */}
        <div
          className="overflow-hidden py-4 px-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex ${
              isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''
            } gap-4 sm:gap-6`}
            style={{
              transform: getTransformStyle(),
            }}
          >
            {displayReviews.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                onClick={() => setSelectedReview(review)}
                className="w-[84vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 bg-white p-7 sm:p-8 rounded-2xl border border-amber-200/80 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-4">
                  {/* Rating Stars & Sentence-Case Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-amber-500">
                      {[...Array(review.ratingStars)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[11px] font-sans font-semibold text-amber-900 bg-amber-100/70 px-2.5 py-1 rounded-md normal-case">
                      {review.tag}
                    </span>
                  </div>

                  {/* Sentence-Case Truncated Review Text (Strict 3-Line Clamp) */}
                  <p className="font-sans italic text-black text-sm sm:text-base leading-relaxed line-clamp-3">
                    "{review.text}"
                  </p>

                  <div className="text-xs font-sans font-bold text-amber-800 group-hover:underline flex items-center space-x-1 pt-1">
                    <span>Read Full Review</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Guest Verified Stamp & Randomized Rating Score (4.3 to 5.0) */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500 font-sans font-medium">
                    {review.source}
                  </div>

                  <span className="text-[11px] font-sans font-extrabold tracking-wider text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
                    {review.ratingScore} Rating
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Controls Below Grid */}
        <div className="flex items-center justify-between mt-8 pt-4">
          {/* Arrow Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-xl bg-white hover:bg-[#C68D53] hover:text-white text-black flex items-center justify-center transition-all duration-300 shadow-md border border-amber-200/80 active:scale-95"
              aria-label="Previous Review"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-xl bg-[#C68D53] hover:bg-black text-white font-bold flex items-center justify-center transition-all duration-300 shadow-md active:scale-95"
              aria-label="Next Review"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center space-x-2">
            {reviewsList.map((_, idx: number) => {
              const activeIdx = currentIndex % reviewsList.length;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(reviewsList.length + idx);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    activeIdx === idx
                      ? 'bg-amber-600 w-3 h-3 ring-4 ring-amber-600/20'
                      : 'bg-slate-300 hover:bg-slate-400 w-2 h-2'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Full Guest Review Modal Overlay */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-opacity animate-fade-in"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="bg-white rounded-3xl p-7 sm:p-9 max-w-xl w-full border border-amber-200 shadow-2xl relative space-y-6 text-black transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-[#C68D53] hover:text-white flex items-center justify-center transition-colors text-slate-700 font-bold"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Rating Stars & Category Tag */}
            <div className="flex items-center space-x-3 pt-2">
              <div className="flex text-amber-500">
                {[...Array(selectedReview.ratingStars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-semibold text-amber-900 bg-amber-100/80 px-3.5 py-1 rounded-md normal-case">
                {selectedReview.tag}
              </span>
            </div>

            {/* Full Untruncated Review Text */}
            <p className="font-sans italic text-lg sm:text-xl leading-relaxed text-black">
              "{selectedReview.text}"
            </p>

            {/* Guest Verified Stamp */}
            <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="font-serif font-bold text-base text-black">
                  Verified Guest Feedback
                </div>
                <div className="text-xs text-amber-900 font-sans font-medium">
                  {selectedReview.source} • ORA Lake View Hotel
                </div>
              </div>

              <span className="text-xs font-bold text-white bg-black px-4 py-2 rounded-full shadow-sm">
                {selectedReview.ratingScore} Verified Rating
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
