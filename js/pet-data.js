const STORAGE_KEY = 'vethic_pets';

// Initial Mock Data
const initialPets = [
    {
        id: 'pet_1',
        name: 'Luna',
        breed: 'Golden Retriever',
        age: 24, // in months
        weight: '25kg',
        type: 'DOG',
        image: '../assets/pictures/dog1.jpg',
        status: 'Tiêm phòng đủ',
        statusClass: 'success'
    },
    {
        id: 'pet_2',
        name: 'Mimi',
        breed: 'Mèo Anh lông ngắn',
        age: 12,
        weight: '4kg',
        type: 'CAT',
        image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80',
        status: 'Cần tái khám',
        statusClass: 'danger'
    },
    {
        id: 'pet_3',
        name: 'Yumi',
        breed: 'Mèo Nhật lông ngắn',
        age: 12,
        weight: '4kg',
        type: 'CAT',
        image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=800&q=80',
        status: 'Cần tái khám',
        statusClass: 'danger'
    }
];

function getPets() {
    const petsJson = localStorage.getItem(STORAGE_KEY);
    if (!petsJson) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialPets));
        return initialPets;
    }
    try {
        return JSON.parse(petsJson);
    } catch (e) {
        console.error("Lỗi khi đọc dữ liệu thú cưng", e);
        return [];
    }
}

function savePets(pets) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(pets));
        return true;
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            alert('Dung lượng lưu trữ đã đầy! Vui lòng sử dụng ảnh có kích thước nhỏ hơn hoặc xóa bớt hồ sơ cũ.');
        } else {
            console.error("Lỗi lưu dữ liệu:", e);
        }
        return false;
    }
}

function addPet(pet) {
    const pets = getPets();
    pet.id = 'pet_' + new Date().getTime();
    if (!pet.status) {
        pet.status = 'Chưa cập nhật';
        pet.statusClass = 'warning';
    }
    pets.push(pet);
    return savePets(pets);
}

function updatePet(updatedPet) {
    const pets = getPets();
    const index = pets.findIndex(p => p.id === updatedPet.id);
    if (index !== -1) {
        pets[index] = { ...pets[index], ...updatedPet };
        return savePets(pets);
    }
    return false;
}

function deletePet(id) {
    let pets = getPets();
    pets = pets.filter(p => p.id !== id);
    return savePets(pets);
}

function getPetById(id) {
    const pets = getPets();
    return pets.find(p => p.id === id);
}

function formatAge(months) {
    if (months >= 12) {
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        return remainingMonths > 0 ? `${years} tuổi ${remainingMonths} tháng` : `${years} tuổi`;
    }
    return `${months} tháng`;
}
