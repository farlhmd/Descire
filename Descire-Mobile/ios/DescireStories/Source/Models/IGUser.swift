
//  Descire
//
//  Created by Farhan Ilhamdi on 30/10/20.
//

import Foundation

public class IGUser: Codable {
    public let internalIdentifier: String
    public let name: String
    public let picture: String
    
    enum CodingKeys: String, CodingKey {
        case internalIdentifier = "id"
        case name = "name"
        case picture = "picture"
    }
}
