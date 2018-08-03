/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // Testing that URl property of feed  is defined and not empty
        
        
        it('Feed URL is defined and not empty', function () {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        // Testing that name property of feed is defined and not empty

       
        it('Feed name is defined and not empty', function () {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });        
        
        
    });


    // The menu Test Suite
    
    describe('The menu', function () {
        
    

        // Testing that the menu element is hidden by default

        var body = $('body');
        
        it('should be hidden by default', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
        
        /* Testing that when clicking on menu-icon 
        the menu will appear and clicking again will disapppear */
        
        var menuIcon = $('.menu-icon-link');
        
        it('should be visible when click and hide when click again', function () {
            
            menuIcon.click();
            expect(body.hasClass("menu-hidden")).toBe(false);
            
            menuIcon.click();
            expect(body.hasClass("menu-hidden")).toBe(true);
    });
    });

    // The initial Entries test suite
    
    describe('Initial Entries', function() {
        
    

        // Asynchronous test of loadFeed() 
        
        beforeEach(function(done){
           loadFeed(0, function(){
               done();
           }); 
        });
        
        it('at least has one entry', function(done) {
            var entries = $('.feed .entry').length;
           expect(entries).toBeGreaterThan(0);
            done();
        });
        
    });

    // New feed selection test suite
    
    describe('New Feed Selection', function(){
        
    
        var newFeed;

        // Testing that content will be changed when new feed is loaded
        
        beforeEach(function(done){
            loadFeed(0, function(){
                newFeed = $('feed').html();
                loadFeed(1, done);
            });
        });
        
        it('loaded with the new feed', function(){
           expect($('.feed').html()).not.toEqual(newFeed);
        });
    });
}());
