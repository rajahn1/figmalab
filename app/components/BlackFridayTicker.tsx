const tickerItems = Array.from({ length: 8 }, (_, index) => index);
const tickerGroups = [0, 1];

export default function BlackFridayTicker() {
  return (
    <div className="h-11 overflow-hidden bg-[#8B7BAA] lg:h-[62px]" aria-hidden="true">
      <div className="black-friday-ticker flex h-full w-max items-center whitespace-nowrap font-bold text-white">
        {tickerGroups.map((group) => (
          <div key={group} className="flex h-full shrink-0 items-center">
            {tickerItems.map((item) => (
              <span key={item} className="flex items-center">
                <span className="px-4 text-xs tracking-[-0.04em] lg:px-6 lg:text-[19px]">
                  BLACK FRIDAY STUDIO EMI
                </span>
                <span className="size-1.5 rounded-full bg-white lg:size-2" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
