export default function SettingsLoading() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-[#1C1C1C]">
        <div className="h-8 w-8 rounded-full border-4 border-[#E9E2DB] border-t-[#B9A48A] animate-spin" />
        <p className="text-sm font-medium">Loading settings...</p>
      </div>
    </div>
  );
}