
//  Descire
//
//  Created by Farhan Ilhamdi on 30/10/20.
//

import Foundation

public enum IGError: Error, CustomStringConvertible {

    case invalidImageURL
    case downloadError

    public var description: String {
        switch self {
        case .invalidImageURL: return "Invalid Image URL"
        case .downloadError: return "Unable to download image"
        }
    }
}
