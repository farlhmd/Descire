
//  Descire
//
//  Created by Farhan Ilhamdi on 30/10/20.
//

import Foundation

class IGStoryPreviewModel: NSObject {
    
    //MARK:- iVars
    let stories: [IGStory]
    let handPickedStoryIndex: Int //starts with(i)
    
    //MARK:- Init method
    init(_ stories: [IGStory], _ handPickedStoryIndex: Int) {
        self.stories = stories
        self.handPickedStoryIndex = handPickedStoryIndex
    }
    
    //MARK:- Functions
    func numberOfItemsInSection(_ section: Int) -> Int {
            return stories.count
    }
    func cellForItemAtIndexPath(_ indexPath: IndexPath) -> IGStory? {
        if indexPath.item < stories.count {
            return stories[indexPath.item]
        }else {
            fatalError("Stories Index mis-matched :(")
        }
    }
}
