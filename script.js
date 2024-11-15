const areasData = [
  {
    province: "National",
    area: "National",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: 0.0, longitude: 0.0 },
  },
  {
    province: "Limpopo",
    area: "Blouberg",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: -23.0233, longitude: 29.4023 },
  },
  {
    province: "Limpopo",
    area: "Amandelbult",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: -24.5407, longitude: 27.4294 },
  },
  {
    province: "Limpopo",
    area: "Musina",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: -22.3386, longitude: 30.0417 },
  },
  {
    province: "Limpopo",
    area: "Blouberg",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: -23.0233, longitude: 29.4023 },
  },
  {
    province: "Limpopo",
    area: "Bushbuckridge",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: -24.8323, longitude: 31.0487 },
  },
  {
    province: "Limpopo",
    area: "Sabie Sands",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: -24.9323, longitude: 31.2487 },
  },
  {
    province: "Limpopo",
    area: "Steelpoort",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: -24.6838, longitude: 30.1565 },
  },
  {
    province: "Limpopo",
    area: "Tubatse",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: -24.5838, longitude: 30.2565 },
  },
  {
    province: "Northern Cape",
    area: "Onseepkans",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: -28.7667, longitude: 19.2333 },
  },
  {
    province: "Northern Cape",
    area: "Pella",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: -29.0333, longitude: 19.1533 },
  },
  {
    province: "Eastern Cape",
    area: "Umtata",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: -31.5889, longitude: 28.7844 },
  },
  {
    province: "Eastern Cape",
    area: "East London",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: -33.0153, longitude: 27.9116 },
  },
  {
    province: "Eastern Cape",
    area: "Elliot",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: -31.3352, longitude: 27.8502 },
  },
  {
    province: "NorthWest",
    area: "Lichtenberg",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: -26.1525, longitude: 26.1595 },
  },
  {
    province: "Gauteng",
    area: "SouthDeep Farm - Westonaria",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: -26.3611, longitude: 27.6505 },
  },
  {
    province: "Mpumalanga",
    area: "Dullstroom",
    initiative: "Agricultural Facilitation & Extension",
    coordinates: { latitude: -25.4172, longitude: 30.1041 },
  },
  {
    province: "Gauteng",
    area: "Mamelodi",
    initiative: "ECD Centre Development",
    coordinates: { latitude: -25.7069, longitude: 28.3429 },
  },
  {
    province: "Gauteng",
    area: "Soshanguve",
    initiative: "ECD Centre Development",
    coordinates: { latitude: -25.5276, longitude: 28.1001 },
  },
  {
    province: "Gauteng",
    area: "Atteridgeville",
    initiative: "ECD Centre Development",
    coordinates: { latitude: -25.7729, longitude: 28.0718 },
  },
  {
    province: "Gauteng",
    area: "Hammanskraal",
    initiative: "ECD Centre Development",
    coordinates: { latitude: -25.4039, longitude: 28.2858 },
  },
  {
    province: "Mpumalanga",
    area: "Nkomazi",
    initiative: "ECD Centre Development",
    coordinates: { latitude: -25.7457, longitude: 31.9072 },
  },
  {
    province: "Western Cape",
    area: "Paarl",
    initiative: "ECD Centre Development",
    coordinates: { latitude: -33.7342, longitude: 18.9621 },
  },
  {
    province: "Kwa-Zulu Natal",
    area: "Bulwer",
    initiative: "Environmental Management and Rehabilitation",
    coordinates: { latitude: -29.7995, longitude: 29.7583 },
  },
  {
    province: "Eastern Cape",
    area: "Matatiele",
    initiative: "Environmental Management and Rehabilitation",
    coordinates: { latitude: -30.3428, longitude: 28.8089 },
  },
  {
    province: "Eastern Cape",
    area: "Maclear",
    initiative: "Environmental Management and Rehabilitation",
    coordinates: { latitude: -31.0661, longitude: 28.3511 },
  },
  {
    province: "Kwa-Zulu Natal",
    area: "Hammarsdale",
    initiative: "Enterprise Development",
    coordinates: { latitude: -29.8224, longitude: 30.6619 },
  },
  {
    province: "Kwa-Zulu Natal",
    area: "Umzumbe",
    initiative: "Enterprise Development",
    coordinates: { latitude: -30.5795, longitude: 30.4928 },
  },
  {
    province: "Kwa-Zulu Natal",
    area: "Empangeni",
    initiative: "Enterprise Development",
    coordinates: { latitude: -28.7617, longitude: 31.8944 },
  },
  {
    province: "Limpopo",
    area: "Steelpoort",
    initiative: "Enterprise Development",
    coordinates: { latitude: -24.6838, longitude: 30.1565 },
  },
  {
    province: "Limpopo",
    area: "Tubatse",
    initiative: "Enterprise Development",
    coordinates: { latitude: -24.5838, longitude: 30.2565 },
  },
  {
    province: "Gauteng",
    area: "Brokostspruit",
    initiative: "Enterprise Development",
    coordinates: { latitude: -25.8144, longitude: 28.7458 },
  },
  {
    province: "Gauteng",
    area: "Mamalodi",
    initiative: "Enterprise Development",
    coordinates: { latitude: -25.7069, longitude: 28.3429 },
  },
  {
    province: "Mpumalanga",
    area: "Nkomazi",
    initiative: "Enterprise Development",
    coordinates: { latitude: -25.7457, longitude: 31.9072 },
  },
  {
    province: "Lesotho",
    area: "Mokhotlong",
    initiative: "Social Facilitation, Health & Job creation",
    coordinates: { latitude: -29.2891, longitude: 29.0665 },
  },
  {
    province: "Kwa-Zulu Natal",
    area: "Umdoni",
    initiative: "Social Facilitation, Health & Job creation",
    coordinates: { latitude: -30.3265, longitude: 30.6873 },
  },
  {
    province: "Kwa-Zulu Natal",
    area: "Umzumbe",
    initiative: "Social Facilitation, Health & Job creation",
    coordinates: { latitude: -30.5795, longitude: 30.4928 },
  },
  {
    province: "Kwa-Zulu Natal",
    area: "Umlalazi",
    initiative: "Social Facilitation, Health & Job creation",
    coordinates: { latitude: -28.9434, longitude: 31.7338 },
  },
  {
    province: "Kwa-Zulu Natal",
    area: "Umhlathuze",
    initiative: "Social Facilitation, Health & Job creation",
    coordinates: { latitude: -28.7617, longitude: 32.0377 },
  },
  {
    province: "Limpopo",
    area: "Musina",
    initiative: "Social Facilitation, Health & Job creation",
    coordinates: { latitude: -22.3458, longitude: 30.0417 },
  },
  {
    province: "Limpopo",
    area: "Blouberg",
    initiative: "Social Facilitation, Health & Job creation",
    coordinates: { latitude: -23.0233, longitude: 29.4023 },
  },
  {
    province: "Limpopo",
    area: "Maruleng",
    initiative: "Social Facilitation, Health & Job creation",
    coordinates: { latitude: -24.2176, longitude: 30.8533 },
  },
  {
    province: "Eastern Cape",
    area: "Matatiele",
    initiative: "Social Facilitation, Health & Job creation",
    coordinates: { latitude: -30.3428, longitude: 28.8089 },
  },
  {
    province: "NorthWest",
    area: "Lichtenburg",
    initiative: "Social Facilitation, Health & Job creation",
    coordinates: { latitude: -26.1525, longitude: 26.1595 },
  },
  {
    province: "Limpopo",
    area: "Levuvhu",
    initiative: "Land reform Facilitation",
    coordinates: { latitude: -23.7452, longitude: 30.3387 },
  },
  {
    province: "Limpopo",
    area: "Letsitele",
    initiative: "Land reform Facilitation",
    coordinates: { latitude: -23.8702, longitude: 30.4087 },
  },
  {
    province: "Eastern Cape",
    area: "Mgungundlovu",
    initiative: "Land reform Facilitation",
    coordinates: { latitude: -30.2193, longitude: 29.6127 },
  },
  {
    province: "Eastern Cape",
    area: "Mabandla",
    initiative: "Land reform Facilitation",
    coordinates: { latitude: -30.3193, longitude: 29.7127 },
  },
  {
    province: "Northern Cape",
    area: "Askam",
    initiative: "Land reform Facilitation",
    coordinates: { latitude: -26.9817, longitude: 20.7817 },
  },
  {
    province: "Eastern Cape",
    area: "Lubisi dam",
    initiative: "Construction",
    coordinates: { latitude: -31.7589, longitude: 27.7281 },
  },
  {
    province: "Gauteng",
    area: "Soweto",
    initiative: "Construction",
    coordinates: { latitude: -26.2485, longitude: 27.8546 },
  },
  {
    province: "Eastern Cape",
    area: "Burgersdorp",
    initiative: "Construction",
    coordinates: { latitude: -30.9964, longitude: 26.3281 },
  },
  {
    province: "Limpopo",
    area: "Blouberg",
    initiative: "Construction",
    coordinates: { latitude: -23.0233, longitude: 29.4023 },
  },
];

// Initialize variables
let markers = [];
let activeInitiative = null;
let isTooltipHidden = false;
let zoomTimeout;

// Initialize map with different zoom levels based on screen size
const isMobile = window.innerWidth <= 768;
const initialZoom = isMobile ? 5 : 5;

const map = L.map("map", {
  zoomControl: true,
  minZoom: isMobile ? 4 : 5,
  maxZoom: isMobile ? 8 : 12,
  scrollWheelZoom: false,
}).setView([-26.1525, 26.1595], initialZoom);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
  opacity: 0.8,
}).addTo(map);

// Create custom icon
const defaultIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Create and add the zoom instruction tooltip
const zoomInstruction = L.control({ position: "bottomright" });
zoomInstruction.onAdd = function (map) {
  const div = L.DomUtil.create("div", "zoom-instruction");
  div.innerHTML = `
    <div class="zoom-tooltip">
      <span>Hold Ctrl + Scroll to zoom the map</span>
      <button class="close-tooltip">×</button>
    </div>
  `;

  div.querySelector(".close-tooltip").addEventListener("click", function () {
    const tooltip = div.querySelector(".zoom-tooltip");
    if (tooltip) {
      tooltip.classList.add("hidden");
      isTooltipHidden = true;
    }
  });

  return div;
};
zoomInstruction.addTo(map);

// Function to show zoom reminder
function showZoomReminder() {
  const tooltip = document.querySelector(".zoom-tooltip");
  if (tooltip && !isTooltipHidden) {
    tooltip.classList.remove("hidden");
    tooltip.classList.add("flash");

    clearTimeout(zoomTimeout);
    zoomTimeout = setTimeout(() => {
      tooltip.classList.remove("flash");
    }, 1000);
  }
}

// Get unique initiatives
const uniqueInitiatives = [
  ...new Set(areasData.map((area) => area.initiative)),
];

// Toggle menu function for mobile
function toggleMenu() {
  const menu = document.getElementById("menuContainer");
  const hamburger = document.querySelector(".hamburger");
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

// Function to filter markers by initiative
function filterByInitiative(selectedInitiative) {
  // Update menu items
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.classList.remove("active");
    if (item.textContent === selectedInitiative) {
      if (activeInitiative === selectedInitiative) {
        // If clicking the same initiative again, remove filter
        activeInitiative = null;
      } else {
        // Activate the new initiative
        item.classList.add("active");
        activeInitiative = selectedInitiative;
      }
    }
  });

  // Show all markers if no initiative is selected
  if (!activeInitiative) {
    markers.forEach((marker) => {
      map.addLayer(marker);
    });
  } else {
    // Filter markers
    markers.forEach((marker) => {
      const markerInitiative = marker.options.initiative;
      if (markerInitiative === activeInitiative) {
        map.addLayer(marker);
      } else {
        map.removeLayer(marker);
      }
    });
  }

  // Close menu if on mobile
  if (window.innerWidth <= 768) {
    const menu = document.getElementById("menuContainer");
    const hamburger = document.querySelector(".hamburger");
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  }
}

// Populate menu dynamically
const menuContainer = document.getElementById("menuContainer");
uniqueInitiatives.forEach((initiative) => {
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";
  menuItem.textContent = initiative;
  menuItem.addEventListener("click", () => filterByInitiative(initiative));
  menuContainer.appendChild(menuItem);
});

// Add markers with hover and click effects
areasData.forEach((area) => {
  if (area.coordinates.latitude !== 0 && area.coordinates.longitude !== 0) {
    const marker = L.marker(
      [area.coordinates.latitude, area.coordinates.longitude],
      {
        icon: defaultIcon,
        initiative: area.initiative,
      }
    ).addTo(map);

    marker.bindPopup(`
      <strong>${area.area}</strong><br>
      Province: ${area.province}<br>
      Initiative: ${area.initiative}
    `);

    // Hover effect
    marker.on("mouseover", function (e) {
      if (e.target._icon) {
        // Check if icon exists
        e.target._icon.classList.add("marker-highlight");
      }
    });

    marker.on("mouseout", function (e) {
      if (
        e.target._icon &&
        !e.target._icon.classList.contains("marker-clicked")
      ) {
        e.target._icon.classList.remove("marker-highlight");
      }
    });

    // Click effect
    marker.on("click", function (e) {
      // Remove previous clicked state from all markers
      markers.forEach((m) => {
        if (m._icon) {
          // Check if marker icon exists before accessing
          m._icon.classList.remove("marker-clicked");
          if (!m._icon.matches(":hover")) {
            m._icon.classList.remove("marker-highlight");
          }
        }
      });

      // Add clicked state to current marker
      if (e.target._icon) {
        // Check if icon exists
        e.target._icon.classList.add("marker-clicked");
        e.target._icon.classList.add("marker-highlight");
      }
    });

    markers.push(marker);
  }
});

// Handle scroll events for zoom control
map.on("wheel", function (e) {
  if (e.originalEvent.ctrlKey) {
    if (!map.scrollWheelZoom.enabled()) {
      map.scrollWheelZoom.enable();
    }
  } else {
    if (map.scrollWheelZoom.enabled()) {
      map.scrollWheelZoom.disable();
    }
    showZoomReminder();
  }
});

// Handle Ctrl key events
document.addEventListener("keyup", function (e) {
  if (e.key === "Control") {
    map.scrollWheelZoom.disable();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Control") {
    map.scrollWheelZoom.enable();
  }
});

// Close menu when clicking on map (mobile only)
if (window.innerWidth <= 768) {
  map.on("click", function () {
    const menu = document.getElementById("menuContainer");
    const hamburger = document.querySelector(".hamburger");
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
}

// Handle window resize
window.addEventListener("resize", function () {
  map.invalidateSize();
  const isMobile = window.innerWidth <= 768;

  // Update zoom constraints
  map.setMinZoom(isMobile ? 4 : 5);
  map.setMaxZoom(isMobile ? 8 : 12);

  // Adjust current zoom if needed
  const currentZoom = map.getZoom();
  if (isMobile && currentZoom > 8) {
    map.setZoom(8);
  }
});
