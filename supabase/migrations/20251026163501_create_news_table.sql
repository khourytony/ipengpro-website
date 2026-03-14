/*
  # Create News Table

  1. New Tables
    - `news`
      - `id` (uuid, primary key) - Unique identifier for each news item
      - `title` (text) - News headline
      - `description` (text) - Brief summary or full content
      - `image_url` (text, optional) - URL to news image
      - `published_date` (date) - Publication date
      - `category` (text, optional) - News category (e.g., "Technology", "Industry", "Company")
      - `author` (text, optional) - Author name
      - `is_featured` (boolean) - Whether the news item is featured
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record update timestamp

  2. Security
    - Enable RLS on `news` table
    - Add policy for public read access (news is publicly viewable)
    - Add policy for authenticated admin users to manage news

  3. Important Notes
    - News items are publicly readable
    - Only authenticated users can create/update/delete news (for future admin functionality)
*/

CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text,
  published_date date NOT NULL DEFAULT CURRENT_DATE,
  category text,
  author text,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "News items are viewable by everyone"
  ON news
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert news"
  ON news
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update news"
  ON news
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete news"
  ON news
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_news_published_date ON news(published_date DESC);
CREATE INDEX IF NOT EXISTS idx_news_featured ON news(is_featured) WHERE is_featured = true;