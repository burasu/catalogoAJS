angular.module("GalleryApp.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/home.html","<div class=\"main\">\n    <div class=\"container\">\n        <h2>Recent Photos</h2>\n        <div class=\"row\">\n            <div class=\"item col-md-4\" ng-repeat=\"photo in photos\">\n                <a href=\"#/photos/{{$index}}\">\n                    <img class=\"img-responsive\" ng-src=\"{{ photo.url }}\" />\n                    <p class=\"author\">\n                        by {{ photo.author }}\n                    </p>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("views/photo.html","<div class=\"photo\">\n    <div class=\"container\">\n        <img ng-src=\"{{ detail.url }}\">\n        <h2 class=\"photo-title\">{{ detail.title }}</h2>\n        <p class=\"photo-author\">{{ detail.author }}</p>\n        <p class=\"photo-views\">{{ detail.views }}</p>\n        <p class=\"photo-upvotes\">{{ detail.upvotes | number }}</p>\n        <p class=\"photo-pubdate\">{{ detail.pubdate | date }}</p>\n    </div>\n</div>\n");}]);