import SwiftUI

struct PageView<Page: View>: View {
    @State var currentPage = 0
    
    var viewControllers: [UIHostingController<Page>]

    init(viewControllers: [UIHostingController<Page>]) {
        self.viewControllers = viewControllers
    }
    
    init(_ views: [Page]) {
        self.viewControllers = views.map { UIHostingController(rootView: $0) }
    }
    
    var body: some View {
        VStack {
            PageViewController(controllers: viewControllers, currentPage: $currentPage)
            Text("Current Page: \(currentPage)")
        }
    }
}

 struct PageView_Previews: PreviewProvider {
     static let controllers = features.map { UIHostingController(rootView: FeatureCard(landmark: $0)) }
     
     static var previews: some View {
         PageView(viewControllers: controllers).aspectRatio(3/2, contentMode: .fit)
     }
 }
