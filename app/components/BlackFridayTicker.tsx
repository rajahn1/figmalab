const tickerItems = Array.from({ length: 8 }, (_, index) => index);
const tickerGroups = [0, 1];

export default function BlackFridayTicker() {
  return (
    <div className="h-[62px] overflow-hidden bg-[#8B7BAA]" aria-hidden="true">
      <div className="black-friday-ticker flex h-full w-max items-center whitespace-nowrap font-bold text-white">
        {tickerGroups.map((group) => (
          <div key={group} className="flex h-full shrink-0 items-center">
            {tickerItems.map((item) => (
              <span key={item} className="flex items-center">
                <span className="px-5 text-sm tracking-[-0.04em] lg:px-6 lg:text-[19px]">
                  BLACK FRIDAY STUDIO EMI
                </span>
                <span className="size-2 rounded-full bg-white" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
