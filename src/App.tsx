import ASCIIText from "@/components/ascii-text";

function App() {
  return (
    <main className="flex min-h-svh flex-col items-stretch justify-start">
      <div className="relative h-[448px] w-svw bg-transparent max-md:h-[224px]">
        <ASCIIText
          text="Vault"
          asciiFontSize={4}
          textFontSize={200}
          textColor={"#fdf9f3"}
          planeBaseHeight={8}
          enableWaves={true}
        />
      </div>
    </main>
  );
}

export default App;
