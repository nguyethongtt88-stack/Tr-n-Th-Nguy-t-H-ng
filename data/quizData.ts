
import type { Quiz } from '../types';

export const quizzes: Quiz[] = [
  {
    id: 1,
    title: "Đề 1: Bài thơ Ánh trăng",
    readingText: `
Hồi nhỏ sống với đồng
với sông rồi với bể
hồi chiến tranh ở rừng
vầng trăng thành tri kỉ

Trần trụi với thiên nhiên
hồn nhiên như cây cỏ
ngỡ không bao giờ quên
cái vầng trăng tình nghĩa

Từ hồi về thành phố
quen ánh điện cửa gương
vầng trăng đi qua ngõ
như người dưng qua đường

Thình lình đèn điện tắt
phòng buyn-đinh tối om
vội bật tung cửa sổ
đột ngột vầng trăng tròn

Ngửa mặt lên nhìn mặt
có cái gì rưng rưng
như là đồng là bể
như là sông là rừng

Trăng cứ tròn vành vạnh
kể chi người vô tình
ánh trăng im phăng phắc
đủ cho ta giật mình.
    `,
    readingSource: "Nguyễn Duy, Ánh trăng, NXB Tác phẩm mới, 1984",
    readingQuestions: [
      { question: "Xác định phương thức biểu đạt chính của văn bản.", points: 0.5 },
      { question: "Chỉ ra 02 biện pháp tu từ được sử dụng trong hai khổ thơ đầu và nêu tác dụng.", points: 1.0 },
      { question: "Hình ảnh “vầng trăng” trong bài thơ mang những ý nghĩa biểu tượng nào?", points: 1.0 },
      { question: "Cái “giật mình” ở cuối bài thơ thể hiện sự thay đổi gì trong nhận thức và tình cảm của nhân vật trữ tình?", points: 1.0 },
      { question: "Từ bài thơ, em rút ra được bài học gì về thái độ sống?", points: 0.5 },
    ],
    paragraphPrompt: "Từ nội dung bài thơ “Ánh trăng” của Nguyễn Duy, hãy viết một đoạn văn (khoảng 150 chữ) trình bày suy nghĩ của em về lối sống “uống nước nhớ nguồn”.",
    essayPrompt: "Phân tích diễn biến tâm trạng của nhân vật trữ tình trong bài thơ “Ánh trăng” của Nguyễn Duy.",
  },
  {
    id: 2,
    title: "Đề 2: Truyện ngắn Làng",
    readingText: `
Trong lòng ông lão lại thấy náo nức hẳn lên. Ông lại muốn về làng, lại muốn được cùng anh em đào đường đắp ụ, xẻ hào, khuân đá… Không biết cái chòi gác ở đầu làng đã dựng xong chưa? Những đường hầm bí mật chắc còn là khướt lắm. Chao ôi! Ông lão nhớ làng, nhớ cái làng quá.
[…] Về đến nhà, ông lão nằm vật ra giường, mấy đứa trẻ thấy ông lão hôm nay khác lắm, cứ lấm lét đưa nhau ra đầu nhà chơi sậm chơi sụi với nhau.
Nhìn lũ con, tủi thân, nước mắt ông lão cứ giàn ra. Chúng nó cũng là trẻ con làng Việt gian đấy ư? Chúng nó cũng bị người ta rẻ rúng hắt hủi đấy ư? Khốn nạn, bằng ấy tuổi đầu… Ông lão nắm chặt hai tay lại mà rít lên:
– Chúng bay ăn miếng cơm hay miếng gì vào mồm mà đi làm cái giống Việt gian bán nước để nhục nhã thế này.
    `,
    readingSource: "Kim Lân, Làng, trích Tuyển tập Kim Lân, NXB Văn học, 2004",
    readingQuestions: [
      { question: "Đoạn trích trên kể về sự việc gì?", points: 0.5 },
      { question: "Xác định thành phần khởi ngữ trong câu: “Khốn nạn, bằng ấy tuổi đầu…”", points: 0.5 },
      { question: "Phân tích diễn biến tâm trạng của nhân vật ông Hai trong đoạn trích trên. Điều gì đã khiến tâm trạng ông có sự thay đổi đột ngột như vậy?", points: 1.5 },
      { question: "Câu nói “Chúng bay ăn miếng cơm hay miếng gì vào mồm…” thể hiện tâm trạng gì của ông Hai?", points: 1.0 },
      { question: "Tình yêu làng và lòng yêu nước của ông Hai có mối quan hệ như thế nào?", points: 0.5 },
    ],
    paragraphPrompt: "Hãy viết một đoạn văn (khoảng 150 chữ) nêu cảm nhận của em về nhân vật ông Hai trong truyện ngắn “Làng” của Kim Lân.",
    essayPrompt: "Phân tích tình yêu làng, yêu nước sâu sắc của nhân vật ông Hai trong truyện ngắn “Làng” của nhà văn Kim Lân.",
  },
  {
    id: 3,
    title: "Đề 3: Văn bản nghị luận",
    readingText: `
Sách mở ra trước mắt tôi những chân trời mới.
Thật vậy, mỗi cuốn sách là một thế giới riêng, một vũ trụ thu nhỏ chứa đựng những tri thức, kinh nghiệm, tư tưởng và tình cảm mà các thế hệ đi trước đã tích lũy và truyền lại. Đọc sách là cách chúng ta đối thoại với những bộ óc vĩ đại nhất của nhân loại, vượt qua mọi rào cản về không gian và thời gian. Sách khoa học giúp ta khám phá những bí ẩn của tự nhiên, từ hạt nguyên tử nhỏ bé đến những thiên hà khổng lồ. Sách văn học đưa ta vào những thế giới tưởng tượng phong phú, giúp ta sống thêm nhiều cuộc đời, đồng cảm với những số phận và thấu hiểu những tâm hồn. Sách lịch sử là cỗ máy thời gian đưa ta về quá khứ, chứng kiến những sự kiện hào hùng, bi tráng và rút ra những bài học cho hiện tại. Sách triết học giúp ta tư duy sâu sắc hơn về ý nghĩa cuộc sống, về bản chất con người và xã hội.
    `,
    readingSource: "Tổng hợp và phỏng theo ý kiến của M. Gorki",
    readingQuestions: [
      { question: "Xác định câu chủ đề của đoạn văn trên.", points: 0.5 },
      { question: "Theo tác giả, sách mang lại những lợi ích gì cho con người?", points: 1.0 },
      { question: "Chỉ ra và nêu tác dụng của phép liệt kê được sử dụng trong đoạn văn.", points: 1.0 },
      { question: "Em có đồng ý với quan điểm “mỗi cuốn sách là một thế giới riêng” không? Vì sao?", points: 1.0 },
      { question: "Thông điệp chính mà tác giả muốn gửi gắm qua đoạn văn là gì?", points: 0.5 },
    ],
    paragraphPrompt: "Viết một đoạn văn (khoảng 150 chữ) trình bày suy nghĩ của em về vai trò của việc đọc sách trong thời đại công nghệ số hiện nay.",
    essayPrompt: "Hãy bàn về ý nghĩa của việc đọc sách đối với thế hệ trẻ ngày nay.",
  }
];
