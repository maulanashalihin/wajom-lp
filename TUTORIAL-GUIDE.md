# Tutorial Wajom - Panduan Penulisan

Folder `src/content/tutorials/` mengandungi semua tutorial Wajom dalam format Markdown. Setiap tutorial akan dipaparkan sebagai halaman web yang interaktif dengan design yang konsisten.

## Struktur File Tutorial

Setiap file tutorial mesti mengikut format berikut:

### 1. Frontmatter (YAML)

```yaml
---
title: "Judul Tutorial"
description: "Deskripsi singkat tutorial"
category: "kategori"
categoryLabel: "Label Kategori"
keywords: "kata kunci untuk search"
duration: "masa bacaan"
number: "nombor tutorial"
bgGradient: "gradient background"
icon: 'SVG icon code'
publishDate: "YYYY-MM-DD"
author: "Nama Author"
---
```

### 2. Content (Markdown)

Gunakan format Markdown standard dengan struktur berikut:

```markdown
# Judul Tutorial

Pengenalan singkat tentang tutorial.

## Apa Yang Anda Akan Pelajari

- ✅ Point 1
- ✅ Point 2
- ✅ Point 3

## Prasyarat (jika ada)

- Tutorial sebelumnya yang perlu diselesaikan
- Requirements lain

## Langkah-langkah

### Langkah 1: Tajuk Langkah

Penjelasan detail...

### Langkah 2: Tajuk Langkah

Penjelasan detail...

## Tips dan Best Practices

### ✅ Do's
- Tip 1
- Tip 2

### ❌ Don'ts
- Jangan buat ini
- Jangan buat itu

## Troubleshooting

Masalah biasa dan penyelesaian.

## Langkah Seterusnya

Link ke tutorial seterusnya.

## Bantuan dan Support

Contact information untuk support.
```

## Kategori Tutorial

### Basic (basic)
- Tutorial asas untuk pemula
- Setup akaun, connection, dll
- Color: Blue gradient

### Warm Up (warmup)
- Tutorial tentang warm up WhatsApp
- Best practices untuk avoid banned
- Color: Green gradient

### Campaign (campaign)
- Tutorial tentang membuat dan manage campaign
- Broadcasting, automation, dll
- Color: Purple gradient

### Advanced (advanced)
- Tutorial lanjutan untuk power users
- Integration, API, custom features
- Color: Red gradient

### Analytics (analytics)
- Tutorial tentang reporting dan analytics
- Metrics, optimization, dll
- Color: Orange gradient

## Icon Guidelines

Gunakan Heroicons atau Feather icons dalam format SVG. Contoh:

```html
<svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="..."></path>
</svg>
```

## Background Gradients

Pilih gradient yang sesuai dengan kategori:

- **Basic**: `from-blue-400 to-blue-600`
- **Warm Up**: `from-green-400 to-green-600`
- **Campaign**: `from-purple-400 to-purple-600`
- **Advanced**: `from-red-400 to-red-600`
- **Analytics**: `from-orange-400 to-orange-600`

## Naming Convention

File names menggunakan kebab-case:
- `cara-buat-akun-baru-hubungkan-whatsapp.md`
- `cara-warm-up-nombor-whatsapp.md`
- `membuat-campaign-pertama.md`

## Tips Penulisan

### 1. Gunakan Bahasa Malaysia
- Tulis dalam Bahasa Malaysia yang mudah difahami
- Avoid jargon teknikal yang kompleks
- Gunakan contoh yang relatable

### 2. Struktur Yang Jelas
- Gunakan heading yang descriptive
- Break down content ke sections yang kecil
- Gunakan bullet points dan numbered lists

### 3. Visual Elements
- Gunakan emoji untuk highlight points (✅ ❌ 🎯 📱 etc.)
- Include code blocks untuk examples
- Gunakan blockquotes untuk tips penting

### 4. Call-to-Actions
- Include clear next steps
- Link ke tutorial related
- Provide support contact information

### 5. SEO Friendly
- Include relevant keywords dalam content
- Optimize meta description
- Use proper heading hierarchy

## Cara Menambah Tutorial Baru

1. **Buat file markdown baru** dalam folder `src/content/tutorials/`
2. **Ikut format frontmatter** yang ditetapkan
3. **Tulis content** mengikut guidelines
4. **Tutorial akan automatik muncul** di halaman tutorial (tidak perlu edit manual!)
5. **Test** tutorial dalam development environment

> **🚀 Automation**: Sistem sekarang automatik membaca semua tutorial dari content collection dan generate TutorialCard secara dinamik. Anda tidak perlu edit file `tutorial.astro` lagi!

### Contoh Menambah Tutorial Baru

1. Buat file: `setup-auto-reply.md`

2. Tambah frontmatter:
```yaml
---
title: "Setup Auto Reply Advanced"
description: "Cara setup auto reply yang pintar untuk handle responses automatically"
category: "advanced"
categoryLabel: "Advanced"
keywords: "auto reply chatbot automation response"
duration: "25 minit"
number: "5"
bgGradient: "from-red-400 to-red-600"
icon: '<svg>...</svg>'
publishDate: "2024-01-18"
author: "Tim Wajom"
---
```

3. **Tutorial automatik muncul** di halaman tutorial tanpa perlu edit manual!

> **Note**: Sistem sekarang menggunakan Astro content collections untuk automatik generate TutorialCard dari frontmatter data. Tidak perlu tambah code manual dalam `tutorial.astro` lagi.

## Testing

Sebelum publish tutorial baru:

1. **Test local development**: `npm run dev`
2. **Semak formatting**: Pastikan markdown render dengan betul
3. **Test navigation**: Pastikan link berfungsi
4. **Mobile responsive**: Test di mobile device
5. **SEO check**: Verify meta tags dan structure

## Support

Jika ada masalah dengan tutorial system:

- Check Astro documentation untuk content collections
- Verify frontmatter format
- Ensure file naming convention betul
- Test dalam development environment

---

*Dokumentasi ini dikemaskini pada: 17 Januari 2024*
