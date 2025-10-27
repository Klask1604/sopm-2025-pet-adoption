// Pet Data
const pets = [
    {
        id: 1,
        name: "Max",
        type: "dog",
        breed: "Golden Retriever",
        age: "young",
        ageYears: "2 years",
        size: "large",
        gender: "Male",
        color: "Golden",
        description: "Max is a friendly and energetic Golden Retriever who loves to play fetch and swim. He's great with kids and other dogs. Max is house-trained and knows basic commands.",
        image: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg",
        featured: true,
        vaccinated: true,
        neutered: true
    },
    {
        id: 2,
        name: "Luna",
        type: "cat",
        breed: "Siamese",
        age: "adult",
        ageYears: "3 years",
        size: "small",
        gender: "Female",
        color: "Cream & Brown",
        description: "Luna is an elegant Siamese cat with beautiful blue eyes. She's affectionate and loves to cuddle. Luna prefers a quiet home and would do best as the only pet.",
        image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
        featured: true,
        vaccinated: true,
        neutered: true
    },
    {
        id: 3,
        name: "Buddy",
        type: "dog",
        breed: "Beagle Mix",
        age: "puppy",
        ageYears: "6 months",
        size: "medium",
        gender: "Male",
        color: "Tri-color",
        description: "Buddy is a playful puppy who's full of energy and curiosity. He's still learning and would benefit from puppy training classes. Buddy loves treats and belly rubs!",
        image: "https://images.pexels.com/photos/7516514/pexels-photo-7516514.jpeg",
        featured: true,
        vaccinated: true,
        neutered: false
    },
    {
        id: 4,
        name: "Whiskers",
        type: "cat",
        breed: "Tabby",
        age: "senior",
        ageYears: "8 years",
        size: "medium",
        gender: "Male",
        color: "Orange & White",
        description: "Whiskers is a calm and gentle senior cat who enjoys napping in sunny spots. He's very affectionate once he gets to know you and makes a perfect companion for a quiet household.",
        image: "https://images.pexels.com/photos/1521304/pexels-photo-1521304.jpeg",
        featured: false,
        vaccinated: true,
        neutered: true
    },
    {
        id: 5,
        name: "Bella",
        type: "dog",
        breed: "Labrador",
        age: "adult",
        ageYears: "4 years",
        size: "large",
        gender: "Female",
        color: "Black",
        description: "Bella is a loyal and intelligent Labrador who loves outdoor activities. She's well-trained and great with families. Bella would make an excellent jogging or hiking companion.",
        image: "https://images.pexels.com/photos/1696589/pexels-photo-1696589.jpeg",
        featured: false,
        vaccinated: true,
        neutered: true
    },
    {
        id: 6,
        name: "Mittens",
        type: "cat",
        breed: "Persian",
        age: "young",
        ageYears: "1 year",
        size: "small",
        gender: "Female",
        color: "White",
        description: "Mittens is a fluffy Persian kitten with a sweet personality. She loves to play with toys and enjoys being groomed. Mittens would thrive in a loving indoor home.",
        image: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
        featured: false,
        vaccinated: true,
        neutered: true
    },
    {
        id: 7,
        name: "Rocky",
        type: "dog",
        breed: "German Shepherd",
        age: "young",
        ageYears: "2 years",
        size: "large",
        gender: "Male",
        color: "Black & Tan",
        description: "Rocky is a strong and protective German Shepherd. He's loyal and intelligent, making him easy to train. Rocky needs an active family with a large yard.",
        image: "https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg",
        featured: false,
        vaccinated: true,
        neutered: true
    },
    {
        id: 8,
        name: "Coco",
        type: "cat",
        breed: "Calico",
        age: "adult",
        ageYears: "5 years",
        size: "medium",
        gender: "Female",
        color: "Orange, Black & White",
        description: "Coco is a beautiful calico cat with a sassy personality. She's independent but loves attention on her own terms. Coco is looking for a patient owner who understands cats.",
        image: "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg",
        featured: false,
        vaccinated: true,
        neutered: true
    },
    {
        id: 9,
        name: "Charlie",
        type: "dog",
        breed: "Poodle Mix",
        age: "senior",
        ageYears: "9 years",
        size: "small",
        gender: "Male",
        color: "White",
        description: "Charlie is a gentle senior dog who enjoys leisurely walks and lots of cuddles. He's calm, well-behaved, and perfect for someone looking for a low-energy companion.",
        image: "https://images.pexels.com/photos/34432227/pexels-photo-34432227.jpeg",
        featured: false,
        vaccinated: true,
        neutered: true
    },
    {
        id: 10,
        name: "Shadow",
        type: "cat",
        breed: "Black Domestic",
        age: "young",
        ageYears: "1 year",
        size: "medium",
        gender: "Male",
        color: "Black",
        description: "Shadow is a sleek black cat with bright green eyes. He's playful and curious, always exploring his surroundings. Shadow gets along well with other cats.",
        image: "https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg",
        featured: false,
        vaccinated: true,
        neutered: true
    },
    {
        id: 11,
        name: "Daisy",
        type: "dog",
        breed: "Corgi",
        age: "puppy",
        ageYears: "5 months",
        size: "small",
        gender: "Female",
        color: "Tan & White",
        description: "Daisy is an adorable Corgi puppy with short legs and a big personality. She's playful, smart, and loves to learn new tricks. Daisy will bring joy to any home!",
        image: "https://images.pexels.com/photos/4772940/pexels-photo-4772940.jpeg",
        featured: false,
        vaccinated: true,
        neutered: false
    },
    {
        id: 12,
        name: "Oliver",
        type: "cat",
        breed: "Maine Coon",
        age: "adult",
        ageYears: "4 years",
        size: "large",
        gender: "Male",
        color: "Brown Tabby",
        description: "Oliver is a majestic Maine Coon with a friendly disposition. Despite his large size, he's gentle and loves to be around people. Oliver enjoys interactive play and climbing.",
        image: "https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg",
        featured: false,
        vaccinated: true,
        neutered: true
    }
];

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function ()
{
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu)
    {
        mobileMenuBtn.addEventListener('click', function ()
        {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Load page-specific content
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (currentPage === 'index.html' || currentPage === '')
    {
        loadFeaturedPets();
    } else if (currentPage === 'pets.html')
    {
        loadAllPets();
        setupFilters();
    } else if (currentPage === 'about.html')
    {
        animateStats();
    } else if (currentPage === 'contact.html')
    {
        setupContactForm();
        setupFAQ();
    }
});

// Create Pet Card HTML
function createPetCard(pet)
{
    const petIcon = pet.type === 'dog' ? '<i class="fas fa-dog"></i>' : '<i class="fas fa-cat"></i>';
    const petTypeLabel = pet.type.charAt(0).toUpperCase() + pet.type.slice(1);

    return `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition pet-card" data-pet-id="${pet.id}">
            <div class="relative">
                <img src="${pet.image}" alt="${pet.name}" class="w-full h-64 object-cover" 
                     onerror="this.src='https://via.placeholder.com/500x400/16a34a/ffffff?text=${pet.type === 'dog' ? 'Dog' : 'Cat'}+Photo'">
                <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-gray-800 flex items-center gap-1">
                    ${petIcon} ${petTypeLabel}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">${pet.name}</h3>
                <p class="text-gray-600 mb-4">${pet.breed} • ${pet.ageYears} • ${pet.gender}</p>
                <p class="text-gray-700 mb-4 line-clamp-2">${pet.description}</p>
                <button onclick="showPetModal(${pet.id})" class="w-full bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700 transition">
                    Learn More
                </button>
            </div>
        </div>
    `;
}

// Load Featured Pets (Homepage)
function loadFeaturedPets()
{
    const container = document.getElementById('featured-pets');
    if (!container) return;

    const featuredPets = pets.filter(pet => pet.featured);
    container.innerHTML = featuredPets.map(pet => createPetCard(pet)).join('');
}

// Load All Pets (Pets Page)
function loadAllPets(filteredPets = null)
{
    const container = document.getElementById('pets-grid');
    const countElement = document.getElementById('pets-count');
    const noResults = document.getElementById('no-results');

    if (!container) return;

    const petsToShow = filteredPets || pets;

    if (petsToShow.length === 0)
    {
        container.classList.add('hidden');
        noResults.classList.remove('hidden');
        countElement.textContent = '';
    } else
    {
        container.classList.remove('hidden');
        noResults.classList.add('hidden');
        container.innerHTML = petsToShow.map(pet => createPetCard(pet)).join('');
        countElement.textContent = `Showing ${petsToShow.length} ${petsToShow.length === 1 ? 'pet' : 'pets'}`;
    }
}

// Setup Filters
function setupFilters()
{
    const typeFilter = document.getElementById('filter-type');
    const ageFilter = document.getElementById('filter-age');
    const sizeFilter = document.getElementById('filter-size');
    const resetBtn = document.getElementById('reset-filters');

    function applyFilters()
    {
        const type = typeFilter.value;
        const age = ageFilter.value;
        const size = sizeFilter.value;

        let filtered = pets;

        if (type !== 'all')
        {
            filtered = filtered.filter(pet => pet.type === type);
        }

        if (age !== 'all')
        {
            filtered = filtered.filter(pet => pet.age === age);
        }

        if (size !== 'all')
        {
            filtered = filtered.filter(pet => pet.size === size);
        }

        loadAllPets(filtered);
    }

    typeFilter.addEventListener('change', applyFilters);
    ageFilter.addEventListener('change', applyFilters);
    sizeFilter.addEventListener('change', applyFilters);

    resetBtn.addEventListener('click', function ()
    {
        typeFilter.value = 'all';
        ageFilter.value = 'all';
        sizeFilter.value = 'all';
        loadAllPets();
    });
}

// Show Pet Modal
function showPetModal(petId)
{
    const pet = pets.find(p => p.id === petId);
    if (!pet) return;

    const modal = document.getElementById('pet-modal');
    const modalName = document.getElementById('modal-name');
    const modalImage = document.getElementById('modal-image');
    const modalDetails = document.getElementById('modal-details');

    modalName.textContent = pet.name;
    modalImage.innerHTML = `<img src="${pet.image}" alt="${pet.name}" class="w-full h-96 object-cover" 
                            onerror="this.src='https://via.placeholder.com/800x400/16a34a/ffffff?text=${pet.type === 'dog' ? 'Dog' : 'Cat'}+Photo'">`;

    modalDetails.innerHTML = `
        <div class="grid grid-cols-2 gap-4">
            <div>
                <p class="text-gray-600 font-medium">Breed</p>
                <p class="text-gray-800 font-bold">${pet.breed}</p>
            </div>
            <div>
                <p class="text-gray-600 font-medium">Age</p>
                <p class="text-gray-800 font-bold">${pet.ageYears}</p>
            </div>
            <div>
                <p class="text-gray-600 font-medium">Size</p>
                <p class="text-gray-800 font-bold">${pet.size.charAt(0).toUpperCase() + pet.size.slice(1)}</p>
            </div>
            <div>
                <p class="text-gray-600 font-medium">Gender</p>
                <p class="text-gray-800 font-bold">${pet.gender}</p>
            </div>
            <div>
                <p class="text-gray-600 font-medium">Color</p>
                <p class="text-gray-800 font-bold">${pet.color}</p>
            </div>
            <div>
                <p class="text-gray-600 font-medium">Vaccinated</p>
                <p class="text-gray-800 font-bold">${pet.vaccinated ? '✅ Yes' : '❌ No'}</p>
            </div>
        </div>
        <div class="mt-4">
            <p class="text-gray-600 font-medium mb-2">About ${pet.name}</p>
            <p class="text-gray-800">${pet.description}</p>
        </div>
    `;

    modal.classList.remove('hidden');

    // Close modal handlers
    document.getElementById('close-modal').onclick = () => modal.classList.add('hidden');
    document.getElementById('close-modal-btn').onclick = () => modal.classList.add('hidden');
    modal.onclick = (e) =>
    {
        if (e.target === modal) modal.classList.add('hidden');
    };
}

// Animate Statistics (About Page)
function animateStats()
{
    const stats = document.querySelectorAll('[data-count]');

    if (stats.length === 0) return;

    const observer = new IntersectionObserver((entries) =>
    {
        entries.forEach(entry =>
        {
            if (entry.isIntersecting)
            {
                const target = parseInt(entry.target.getAttribute('data-count'));
                animateValue(entry.target, 0, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    });

    stats.forEach(stat => observer.observe(stat));
}

function animateValue(element, start, end, duration)
{
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() =>
    {
        current += increment;
        if (current >= end)
        {
            element.textContent = end;
            clearInterval(timer);
        } else
        {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Setup Contact Form
function setupContactForm()
{
    const form = document.getElementById('contact-form');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-success-modal');

    if (!form) return;

    form.addEventListener('submit', function (e)
    {
        e.preventDefault();

        // Show success modal
        successModal.classList.remove('hidden');

        // Reset form
        form.reset();
    });

    // Close modal handler
    if (closeModalBtn)
    {
        closeModalBtn.addEventListener('click', function ()
        {
            successModal.classList.add('hidden');
        });
    }

    // Close modal when clicking outside
    if (successModal)
    {
        successModal.addEventListener('click', function (e)
        {
            if (e.target === successModal)
            {
                successModal.classList.add('hidden');
            }
        });
    }
}

// Setup FAQ Accordion
function setupFAQ()
{
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question =>
    {
        question.addEventListener('click', function ()
        {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('span:last-child');

            // Close other open FAQs
            document.querySelectorAll('.faq-answer').forEach(otherAnswer =>
            {
                if (otherAnswer !== answer && !otherAnswer.classList.contains('hidden'))
                {
                    otherAnswer.classList.add('hidden');
                    otherAnswer.previousElementSibling.querySelector('span:last-child').textContent = '+';
                }
            });

            // Toggle current FAQ
            answer.classList.toggle('hidden');
            icon.textContent = answer.classList.contains('hidden') ? '+' : '−';
        });
    });
}