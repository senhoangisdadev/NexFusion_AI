"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";

type Props = {};

const TextToSpeechPage = (props: Props) => {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <main className="flex flex-col items-center justify-start p-24 gap-2">
      <form onSubmit={generateSpeech} className="flex gap-2 items-center">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text here"
          className="w-72"
        />
        <Button disabled={loading} type="submit">
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : (
            "Generate"
          )}
        </Button>
      </form>
      {audioUrl && (
        <audio controls src={audioUrl} className="mt-4">
          Your browser does not support the audio element.
        </audio>
      )}
    </main>
  );

  async function generateSpeech(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post("/api/text-to-speech", { text }, {
        responseType: "blob",
      });

      // Tạo URL cho tệp âm thanh và thiết lập trạng thái
      const audioBlob = new Blob([response.data], { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl);
    } catch (error) {
      console.error("Error generating speech:", error);
    } finally {
      setLoading(false);
    }
  }
};

export default TextToSpeechPage;
