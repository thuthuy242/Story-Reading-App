export interface Story {
    story:{
        cover: string;
        title: string;
        content: string;
        categories: []
        reaction:{
            viewCount : number;
            commentCount: number;
            likeCount:number;
            ratingCount: number;
            
        }
        
    }
}
