// 포스트 스키마
// 필드이름, 데이터 타입, 설명
// title, 문자열, 제목
// body, 문자열, 내용
// tags, 문자열 배열, 태그 목록
// publishedDate, 날짜, 작성 날짜

import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    // 현재 날짜를 기본값으로 지정
    default: Date.now,
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;
