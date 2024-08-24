import { pipeline } from "@xenova/transformers";
import { NextResponse } from "next/server";
import { WaveFile } from "wavefile";

export async function POST(req: Request) {
  try {
    // Tạo một pipeline cho Text-to-Speech
    const synthesizer = await pipeline(
      "text-to-speech",
      "Xenova/speecht5_tts",
      {
        quantized: false,
      }
    );

    // Đọc JSON từ request để lấy văn bản đầu vào
    const { text } = await req.json();

    // Sử dụng đường dẫn tới embeddings từ internet
    const speaker_embeddings =
      "https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/speaker_embeddings.bin";

    // Tạo âm thanh từ văn bản đầu vào
    const result = await synthesizer(text, {
      speaker_embeddings,
    });

    // Tạo tệp WAV từ dữ liệu âm thanh
    const wav = new WaveFile();
    wav.fromScratch(1, result.sampling_rate, "32f", result.audio);
    const wavBuffer = wav.toBuffer();

    // Đường dẫn lưu tệp âm thanh
    // const filePath = path.join(
    //   "E:",
    //   "Project",
    //   "object-detection",
    //   "data",
    //   "result.wav"
    // );

    // // Đảm bảo thư mục tồn tại
    // fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // // Lưu tệp âm thanh
    // fs.writeFileSync(filePath, wavBuffer);
    // console.log("File saved at", filePath);

    // Trả về phản hồi với tệp WAV
    return new NextResponse(wavBuffer, {
      headers: {
        "Content-Type": "audio/wav",
        "Content-Disposition": "attachment; filename=audio.wav",
      },
    });

    // // Trả về phản hồi với thông báo thành công
    // return new NextResponse("File saved successfully", {
    //   status: 200,
    // });
  } catch (error) {
    console.error("Error generating audio:", error);
    return NextResponse.error();
  }
}
